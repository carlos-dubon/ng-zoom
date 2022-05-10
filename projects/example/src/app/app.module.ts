import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgZoomConfig, NgZoomModule } from 'ng-zoom';

const ngZoomConfig: NgZoomConfig = {
  backgroundColor: 'skyblue',
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZoomModule.forRoot(ngZoomConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
