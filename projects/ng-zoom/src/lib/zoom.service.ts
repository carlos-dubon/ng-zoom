import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { getImageDimensions } from './helpers/getImageDimensions';
import { getScale } from './helpers/getScale';

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

  private transitionComplete = false;

  get isZoomed() {
    return this.transitionComplete;
  }

  handleClick = (el: HTMLImageElement | null) => {
    if (this.zoomedImage) {
      this.zoomOut();
      return;
    }

    if (el) {
      this.zoomedImage = el;
      this.zoomIn();
    }
  };

  handleKeydown = (event: KeyboardEvent) => {
    if (event.code != 'Escape') return;
    event.preventDefault();
    this.zoomOut();
  };

  handleScroll = () => {
    this.zoomOut();
  };

  handleResize = () => {
    this.zoomOut();
  };

  private zoomIn() {
    if (!this.zoomedImage) return;

    const DOMRect = this.zoomedImage.getBoundingClientRect();
    const styleDeclaration = this.window.getComputedStyle(this.zoomedImage);

    const [imageWidth, imageHeight] = getImageDimensions(
      DOMRect,
      styleDeclaration
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

    const isPaddingNeeded: boolean =
      this.configService.config.padding! >
      Math.min(vh - imageHeight * scale, vw - imageWidth * scale) / 2;

    if (isPaddingNeeded) {
      let scaleWithPaddingBeforeScaleUp = getScale(
        imageWidth + this.configService.config.padding!,
        imageHeight + this.configService.config.padding!,
        vw,
        vh
      );

      if (!shouldScaleUp) {
        const limitedScale = getScale(
          imageWidth,
          imageHeight,
          this.zoomedImage.naturalWidth - this.configService.config.padding!,
          this.zoomedImage.naturalHeight - this.configService.config.padding!
        );

        scaleWithPaddingBeforeScaleUp = Math.min(
          scaleWithPaddingBeforeScaleUp,
          limitedScale
        );
      }

      scale = scaleWithPaddingBeforeScaleUp;
    }

    const doc = this.document.documentElement;
    const scrollLeft =
      (this.window.scrollX || doc.scrollLeft) - (doc.clientLeft || 0);
    const scrollTop =
      (this.window.scrollY || doc.scrollTop) - (doc.clientTop || 0);

    const imageCenterX = scrollLeft + DOMRect.left + DOMRect.width / 2;
    const imageCenterY = scrollTop + DOMRect.top + DOMRect.height / 2;

    const screenCenterX = scrollLeft + vw / 2;
    const screenCenterY = scrollTop + vh / 2;

    const translateX = (screenCenterX - imageCenterX) / scale;
    const translateY = (screenCenterY - imageCenterY) / scale;

    this.zoomedImage.classList.add('ng-zoom-zoomed');
    this.zoomedImage.parentElement?.classList.add('ng-zoom-wrapper-zoomed');
    this.zoomedImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
    this.zoomedImage.addEventListener(
      'transitionend',
      () => {
        this.transitionComplete = true;
      },
      {
        once: true,
      }
    );
  }

  private zoomOut() {
    if (!this.zoomedImage) return;

    this.zoomedImage.style.transform = 'scale(1)';
    this.zoomedImage.parentElement?.classList.remove('ng-zoom-wrapper-zoomed');
    this.zoomedImage.addEventListener(
      'transitionend',
      () => {
        this.transitionComplete = false;
        this.zoomedImage?.classList.remove('ng-zoom-zoomed');
        this.zoomedImage = null;
      },
      {
        once: true,
      }
    );
  }
}
