import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { LoaderComponent } from './loader/loader.component';
import { LazyLoadDirective } from './directives/lazy-load.directive';

@NgModule({
  declarations: [
    ImageCardComponent,
    AppComponent,
    LazyLoadDirective,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
