import { DOCUMENT } from '@angular/common';
import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { ZoomDirective } from './zoom.directive';
import { injectStyles } from './styles/styles';
import { ConfigService, ConfigToken, NgZoomConfig } from './config.service';

@NgModule({
  declarations: [ZoomDirective],
  imports: [],
  exports: [ZoomDirective],
})
export class NgZoomModule {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Optional()
    @Inject(ConfigToken)
    private config: NgZoomConfig,
    private configService: ConfigService
  ) {
    this.configService.config = this.config;
    injectStyles(this.document, this.configService.config);
  }

  static forRoot(config: NgZoomConfig): ModuleWithProviders<NgZoomModule> {
    return {
      ngModule: NgZoomModule,
      providers: [{ provide: ConfigToken, useValue: config }],
    };
  }
}
