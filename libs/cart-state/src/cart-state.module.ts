import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './+state/cart.reducer';
import { cartInitialState } from './+state/cart.init';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('cart', cartReducer, { initialState: cartInitialState })]
})
export class CartStateModule {}
