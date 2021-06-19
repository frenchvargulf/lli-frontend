import {
  Component,
  Input
} from '@angular/core';
import { fadeAnimation } from '../animations/fade-animation';
import {AppImageData} from "../models/AppImageData";

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  animations: [fadeAnimation],
})
export class ImageCardComponent {
  @Input() image: AppImageData;
  isVisible = false;

  constructor() {}

  showLoader() {
    this.isVisible = true;
  }

  hideLoader() {
    this.isVisible = false;
  }
}
