import { Component, OnInit } from '@angular/core';
import { ImagesService } from './services/images.service';
import { chunk } from './helpers/chunk';
import { AppImageData } from './models/AppImageData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  rows: AppImageData[] = [];

  constructor(private images: ImagesService) {}

  ngOnInit(): void {
    this.images.get().subscribe((images: AppImageData[]) => {
      this.rows = chunk(images, 3);
    });
  }
}
