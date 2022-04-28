import { InjectionToken } from '@angular/core';

export interface NgZoomConfig {
  backgroundColor?: string;
}

const defaultConfig: NgZoomConfig = {
  backgroundColor: '#fffff',
};

// InjectionToken (which prevents collisions) and useValue.
const NgZoomConfigService = new InjectionToken<NgZoomConfig>('NgZoomConfig');

export { NgZoomConfigService, defaultConfig };
