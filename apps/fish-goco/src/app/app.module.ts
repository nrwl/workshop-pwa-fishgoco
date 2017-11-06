import { NgModule, Component, PLATFORM_ID, Inject, Optional, SkipSelf } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { NavModule } from '@fishgoco-pwa/nav';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment, ServiceWorkerModule, NgServiceWorker } from '../environments/environment';
import { CartStateModule } from '@fishgoco-pwa/cart-state';
import { isPlatformBrowser } from '@angular/common';

@Component({
  template: ''
})
export class NoOpComponent {}


const routes: Route[] = [
  { path: 'shell', component: NoOpComponent, pathMatch: 'full' },
  { path: '', loadChildren: '@fishgoco-pwa/feed/src/feed.module.ts#FeedModule' },
  { path: 'order', loadChildren: '@fishgoco-pwa/order/src/order.module.ts#OrderModule' },
  { path: 'stores', loadChildren: '@fishgoco-pwa/stores/src/stores.module.ts#StoresModule' },
  { path: 'cart', loadChildren: '@fishgoco-pwa/cart/src/cart.module.ts#CartModule' }

];

@NgModule({
  imports: [
    BrowserModule.withServerTransition({
      appId: 'fish-goco'
    }),
    RouterModule.forRoot(routes),
    NavModule,
    NxModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    CartStateModule,
    ServiceWorkerModule
  ],
  declarations: [AppComponent, NoOpComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Optional() worker: NgServiceWorker, @SkipSelf() @Inject(PLATFORM_ID) platformId: string) {

    if (isPlatformBrowser(platformId)) {
      worker.registerForPush({
        applicationServerKey: 'BOEfqLFMG8Wihyqc_Ojjtvgj5531q3Lfx9MFMOnaMUxW7zRxNvXIc9PGoasMkIZtPMPAPc0QI0dz5KlIDP5czJo',
      }).subscribe(v => {
        console.log('push registered', JSON.stringify(v));
      });
      worker.updates.subscribe(v => {
        console.log('got an update!', v);
      });
      worker.push.subscribe(v => console.log('pushed', v));
    }
  }
}
