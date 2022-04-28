import { DOCUMENT } from '@angular/common';
import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { ZoomDirective } from './zoom.directive';
import { injectStyles } from './styles/styles';
import { defaultConfig, NgZoomConfigService } from './config.service';
import type { NgZoomConfig } from './config.service';

@NgModule({
  declarations: [ZoomDirective],
  imports: [],
  exports: [ZoomDirective],
})
export class NgZoomModule {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Optional()
    @Inject(NgZoomConfigService)
    private config: NgZoomConfig
  ) {
    this.setConfig();
    injectStyles(this.document, this.config);
  }

  static forRoot(config: NgZoomConfig): ModuleWithProviders<NgZoomModule> {
    return {
      ngModule: NgZoomModule,
      providers: [{ provide: NgZoomConfigService, useValue: config }],
    };
  }

  private setConfig(): void {
    if (!this.config) {
      this.config = defaultConfig;
    } else {
      this.config = { ...defaultConfig, ...this.config };
    }
  }
}
