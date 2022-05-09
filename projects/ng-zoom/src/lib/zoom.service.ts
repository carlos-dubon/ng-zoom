import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional } from '@angular/core';
import { debounce } from 'throttle-debounce';
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
