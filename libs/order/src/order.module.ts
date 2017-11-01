import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { orderReducer } from './+state/order.reducer';
import { orderInitialState } from './+state/order.init';
import { OrderEffects } from './+state/order.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AddToCartModule } from '@fishgoco-pwa/add-to-cart';

const routes: Route[] = [{ path: '', component: MenuComponent }];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AddToCartModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('order', orderReducer, { initialState: orderInitialState }),
    EffectsModule.forFeature([OrderEffects]),
    StoreRouterConnectingModule
  ],
  declarations: [MenuComponent],
  providers: [OrderEffects]
})
export class OrderModule {}
