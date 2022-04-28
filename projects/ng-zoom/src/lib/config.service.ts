import { InjectionToken } from '@angular/core';

export interface NgZoomConfig {
  /**
   * The background color of the wrapper element.
   */
  backgroundColor?: string;
  /**
   * Defines if an element should be scaled up when zooming or maintain its original size.
   */
  scaleUp?: boolean;
}

const defaultConfig: NgZoomConfig = {
  backgroundColor: '#fffff',
  scaleUp: true,
};

// InjectionToken (which prevents collisions) and useValue.
const NgZoomConfigService = new InjectionToken<NgZoomConfig>('NgZoomConfig');

export { NgZoomConfigService, defaultConfig };
