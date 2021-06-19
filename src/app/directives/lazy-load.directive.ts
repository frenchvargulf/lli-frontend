import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appLazyLoad]',
})
export class LazyLoadDirective implements AfterViewInit {
  @HostBinding('attr.src') srcAttr = null;
  @HostBinding('style.backgroundImage') bg = null;
  @Input() src: string;
  @Input() offset: string;
  @Input() hideLoader: () => void;
  @Input() showLoader: () => void;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.canLazyLoad() ? this.lazyLoadImage() : this.loadImage();
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoadImage() {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.loadImage(this.el.nativeElement);
            obs.unobserve(this.el.nativeElement);
            this.showLoader();
          } else {
            this.hideLoader();
          }
        });
      },
      { rootMargin: this.offset }
    );
    obs.observe(this.el.nativeElement);
  }

  private loadImage(element?: any) {
    element.nodeName === 'IMG'
      ? (this.srcAttr = this.src)
      : (this.bg = `url(${this.src})`);
  }
}
