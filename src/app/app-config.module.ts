import { NgModule, InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  gst: number;
  catalogApiUrl: string;
  gridSize: number;
}

export const APP_DI_CONFIG: AppConfig = {
  gst: 0.05,
  catalogApiUrl: 'https://api.myjson.com/bins/1g2o7w',
  gridSize: 6
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class AppConfigModule { }
