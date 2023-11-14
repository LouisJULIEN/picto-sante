import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import {FormsModule} from "@angular/forms";
import { CarouselComponent } from './icon-display/carousel/carousel.component';
import { SinglePictureComponent } from './icon-display/single-picture/single-picture.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    CarouselComponent,
    SinglePictureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
