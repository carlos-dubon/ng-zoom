import { Injectable, InjectionToken } from '@angular/core';

export interface NgZoomConfig {
  /**
   * The background color of the wrapper element.
   * @default '#ffffff'
   */
  backgroundColor?: string;
  /**
   * Defines if an element should be scaled up when zooming or maintain its original size.
   * @default `true`
   */
  scaleUp?: boolean;
  /**
   * Padding in pixels
   * @default `20`
   */
  padding?: number;
  /**
   * The duration of the zoom animation in milliseconds.
   * @default `300`
   */
  duration?: number;
}

// InjectionToken (which prevents collisions) and useValue.
const ConfigToken = new InjectionToken<NgZoomConfig>('NgZoomConfig');

@Injectable({
  providedIn: 'root',
})
class ConfigService {
  private defaultConfig: NgZoomConfig = {
    backgroundColor: '#ffffff',
    scaleUp: true,
    padding: 20,
    duration: 300,
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
