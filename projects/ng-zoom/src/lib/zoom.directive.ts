import { ZoomService } from './zoom.service';
import { Directive, ElementRef, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[ng-zoom]',
})
export class ZoomDirective {
  private window: Window;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private zoomService: ZoomService,
    private el: ElementRef<HTMLImageElement>
  ) {
    this.window = this.document.defaultView as Window;
    this.processImage(this.el.nativeElement);
  }

  @HostListener('click')
  onClick() {
    this.zoomService.handleClick(this.el.nativeElement);
  }

  ngOnInit() {}

  private processImage = (image: HTMLImageElement) => {
    // create an image wrapper element
    const wrapper = this.document.createElement('div');

    // let wrapper mimick pearl display property to not break anything
    wrapper.classList.add('ng-zoom-wrapper');
    wrapper.style.display = this.window.getComputedStyle(image).display;
    image.parentElement?.insertBefore(wrapper, image);
    wrapper.appendChild(image);

    image.classList.add('ng-zoom');
    image.style.transform = 'scale(1)';
  };
}
