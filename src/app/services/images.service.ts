import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppImageData } from '../models/AppImageData';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  imagesUrl = 'https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10';

  constructor(private http: HttpClient) {}

  get(): Observable<AppImageData[]> {
    return this.http.get<AppImageData[]>(this.imagesUrl);
  }
}
