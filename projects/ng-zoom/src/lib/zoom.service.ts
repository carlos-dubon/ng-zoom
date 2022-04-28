import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ZoomService {
  constructor() {
    console.log('ZoomService');
  }

  private zoomedImage: HTMLImageElement | null = null;

  public zoomIn(el: ElementRef<HTMLImageElement>) {
    console.log(el.nativeElement.src);
  }
}
