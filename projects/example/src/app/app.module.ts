import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgZoomModule } from 'ng-zoom';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgZoomModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
