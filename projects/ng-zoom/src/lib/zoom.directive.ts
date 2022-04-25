import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ng-zoom]',
})
export class ZoomDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') elClicked() {
    console.log('clicker');
  }

  ngOnInit() {
    console.log('ZoomDirective.ngOnInit');
  }
}
