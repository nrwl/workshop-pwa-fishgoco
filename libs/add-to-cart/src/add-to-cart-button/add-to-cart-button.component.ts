import { Component, Input, OnInit } from '@angular/core';
import { CartState } from '@fishgoco-pwa/cart-state';
import { Store } from '@ngrx/store';
import { MenuItem } from '@fishgoco-pwa/order';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.scss']
})
export class AddToCartButtonComponent implements OnInit {
  @Input() menuItem: MenuItem;

  constructor(private store: Store<CartState>) {}

  ngOnInit() {
  }

  addToCart() {
    const item = {...this.menuItem, quantity: 1};
    this.store.dispatch({type: 'ADD_TO_CART', payload: item});
  }
}
