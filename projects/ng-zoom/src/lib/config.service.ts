import { Injectable, InjectionToken } from '@angular/core';

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

// InjectionToken (which prevents collisions) and useValue.
const ConfigToken = new InjectionToken<NgZoomConfig>('NgZoomConfig');

@Injectable({
  providedIn: 'root',
})
class ConfigService {
  private defaultConfig: NgZoomConfig = {
    backgroundColor: '#fffff',
    scaleUp: true,
  };

  private configValue: NgZoomConfig = this.defaultConfig;

  constructor() {}

  get config(): NgZoomConfig {
    return this.configValue;
  }

  set config(config: NgZoomConfig) {
    this.configValue = { ...this.defaultConfig, ...config };
  }
}

export { ConfigService, ConfigToken };
