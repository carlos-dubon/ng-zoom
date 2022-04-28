import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { debounce } from 'throttle-debounce';
import { NgZoomConfig, NgZoomConfigService } from './config.service';
import { sumStyleDeclarationValues } from './helpers/sumStyleDeclarationValues';

@Injectable({
  providedIn: 'root',
})
export class ZoomService {
  private zoomedElement: HTMLElement | null = null;
  private window: Window;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Optional()
    @Inject(NgZoomConfigService)
    private config: NgZoomConfig
  ) {
    this.window = this.document.defaultView as Window;
  }

  handleClick = debounce(500, true, (el: HTMLElement | null) => {
    if (this.zoomedElement) {
      this.zoomOut();
      this.zoomedElement = null;
      return;
    }

    if (el) {
      this.zoomedElement = el;
      this.zoomIn();
    }
  });

  private zoomIn() {
    if (!this.zoomedElement) return;

    const DOMRect = this.zoomedElement.getBoundingClientRect();
    const styleDeclaration = this.window.getComputedStyle(this.zoomedElement);

    const elWidth: number =
      DOMRect.width -
      sumStyleDeclarationValues(
        styleDeclaration,
        'borderLeftWidth',
        'borderRightWidth',
        'paddingLeft',
        'paddingRight'
      );

    const elHeight: number =
      DOMRect.height -
      sumStyleDeclarationValues(
        styleDeclaration,
        'borderTopWidth',
        'borderBottomWidth',
        'paddingTop',
        'paddingBottom'
      );

    const vw: number = this.window.innerWidth;
    const vh: number = this.window.innerHeight;

    console.log(this.config);
  }

  private zoomOut() {
    if (!this.zoomedElement) return;

    this.zoomedElement.style.transform = 'scale(1)';
    this.zoomedElement.parentElement?.classList.remove(
      'ng-zoom-wrapper-zoomed'
    );
    this.zoomedElement.addEventListener(
      'transitionend',
      () => {
        this.zoomedElement?.classList.remove('ng-zoom-zoomed');
      },
      {
        once: true,
      }
    );
  }
}
