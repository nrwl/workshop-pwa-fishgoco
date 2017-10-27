import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { NxModule } from '@nrwl/nx';
import { NavModule } from '@fishgoco-pwa/nav';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

const routes: Route[] = [
  { path: '', loadChildren: '@fishgoco-pwa/feed/src/feed.module.ts#FeedModule' },
  { path: 'order', loadChildren: '@fishgoco-pwa/order/src/order.module.ts#OrderModule' },
  { path: 'stores', loadChildren: '@fishgoco-pwa/stores/src/stores.module.ts#StoresModule' }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NavModule,
    NxModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
