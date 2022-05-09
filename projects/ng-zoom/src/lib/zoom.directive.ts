import { ZoomService } from './zoom.service';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ng-zoom]',
})
export class ZoomDirective {
  constructor(
    private zoomService: ZoomService,
    private el: ElementRef<HTMLImageElement>
  ) {}

  @HostListener('click')
  onClick() {
    this.zoomService.handleClick(this.el.nativeElement);
  }

  ngOnInit() {}
}
