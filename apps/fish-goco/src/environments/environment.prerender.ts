import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export const environment = {
  production: true,
  prerender: true
};

export const ServiceWorkerModule = [];
export class NgServiceWorker {
  registerForPush: (opts) => Observable<any>;
  updates: Observable<any>;
  push: Observable<any>;
}
