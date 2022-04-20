import { NgModule } from '@angular/core';
import { NgZoomComponent } from './ng-zoom.component';
import { ZoomDirective } from './zoom.directive';

@NgModule({
  declarations: [NgZoomComponent, ZoomDirective],
  imports: [],
  exports: [NgZoomComponent, ZoomDirective],
})
export class NgZoomModule {}
