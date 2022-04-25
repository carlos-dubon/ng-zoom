import { DOCUMENT } from '@angular/common';
import {
  Inject,
  InjectionToken,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { ZoomDirective } from './zoom.directive';
import css from './styles/styles';

interface NgZoomConfig {
  backgroundColor?: string;
}

// InjectionToken (which prevents collisions) and useValue.
const NgZoomConfigService = new InjectionToken<NgZoomConfig>('NgZoomConfig');

@NgModule({
  declarations: [ZoomDirective],
  imports: [],
  exports: [ZoomDirective],
})
export class NgZoomModule {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(NgZoomConfigService) private config: NgZoomConfig
  ) {
    console.log(this.config);
    this.injectStyles();
  }

  private injectStyles = () => {
    const styles = this.document.createElement('style');
    styles.innerHTML = css;

    this.document.head.appendChild(styles);
  };

  static forRoot(config?: NgZoomConfig): ModuleWithProviders<NgZoomModule> {
    const defaultConfig: NgZoomConfig = {
      backgroundColor: '#fff',
    };

    if (!config) {
      config = defaultConfig;
    } else {
      config = { ...defaultConfig, ...config };
    }

    return {
      ngModule: NgZoomModule,
      providers: [{ provide: NgZoomConfigService, useValue: config }],
    };
  }
}
