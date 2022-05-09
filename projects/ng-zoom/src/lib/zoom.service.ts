import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { debounce } from 'throttle-debounce';
import { ConfigService } from './config.service';
import { getScale } from './helpers/getScale';
import { sumStyleDeclarationValues } from './helpers/sumStyleDeclarationValues';

@Injectable({
  providedIn: 'root',
})
export class ZoomService {
  private zoomedImage: HTMLImageElement | null = null;
  private window: Window;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private configService: ConfigService
  ) {
    this.window = this.document.defaultView as Window;
  }

  handleClick = debounce(500, true, (el: HTMLImageElement | null) => {
    if (this.zoomedImage) {
      this.zoomOut();
      this.zoomedImage = null;
      return;
    }

    if (el) {
      this.zoomedImage = el;
      this.zoomIn();
    }
  });

  private zoomIn() {
    if (!this.zoomedImage) return;

    const DOMRect = this.zoomedImage.getBoundingClientRect();
    const styleDeclaration = this.window.getComputedStyle(this.zoomedImage);

    const imageWidth: number =
      DOMRect.width -
      sumStyleDeclarationValues(
        styleDeclaration,
        'borderLeftWidth',
        'borderRightWidth',
        'paddingLeft',
        'paddingRight'
      );

    const imageHeight: number =
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

    const shouldScaleUp = this.configService.config.scaleUp;

    let scale: number = getScale(imageWidth, imageHeight, vw, vh);

    if (!shouldScaleUp) {
      const limitedScale = getScale(
        imageWidth,
        imageHeight,
        this.zoomedImage.naturalWidth,
        this.zoomedImage.naturalHeight
      );

      scale = Math.min(scale, limitedScale);
    }
  }

  private zoomOut() {
    if (!this.zoomedImage) return;

    this.zoomedImage.style.transform = 'scale(1)';
    this.zoomedImage.parentElement?.classList.remove('ng-zoom-wrapper-zoomed');
    this.zoomedImage.addEventListener(
      'transitionend',
      () => {
        this.zoomedImage?.classList.remove('ng-zoom-zoomed');
      },
      {
        once: true,
      }
    );
  }
}
