import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '@fishgoco-pwa/cart-state';
import { OrderState } from '@fishgoco-pwa/order';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartMenuItems$;

  constructor(private store: Store<CartState>,
              private ordersStore: Store<OrderState>) {
  }

  ngOnInit() {
    this.cartMenuItems$ = this.store.select(s => s.cart.menuItemIds)
      .switchMap(items => this.ordersStore.select(s => s.order.menuItems)
        .map(i => i.filter(a => items.indexOf(a.id) >= 0)));
  }

  clearCart() {
    this.store.dispatch({type: 'CLEAR_CART'});
  }
}
