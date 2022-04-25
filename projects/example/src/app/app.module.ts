import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgZoomModule } from 'ng-zoom';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZoomModule.forRoot({ backgroundColor: '#000' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
