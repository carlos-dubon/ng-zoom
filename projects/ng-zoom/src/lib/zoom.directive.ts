import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[zoom]',
})
export class ZoomDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    console.log('enter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('leave');
  }
}
