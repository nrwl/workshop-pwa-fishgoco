import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [{ path: '', component: CartComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [CartComponent]
})
export class CartModule {}
