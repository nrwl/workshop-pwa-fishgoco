import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '@fishgoco-pwa/cart-state';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items$;

  constructor(private store: Store<CartState>) {
  }

  ngOnInit() {
    this.items$ = this.store.select(s => s.cart.items);
  }

  removeItem(item) {
    this.store.dispatch({type: 'REMOVE_ITEM', payload: item});
  }

  clearCart() {
    this.store.dispatch({type: 'CLEAR_CART'});
  }
}
