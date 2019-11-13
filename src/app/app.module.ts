import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { FhNewsComponent } from './fh-news/fh-news.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertButtonComponent,
    FhNewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
