import { Component, OnInit } from '@angular/core';
import { CartState } from '@fishgoco-pwa/cart-state';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  cartCount$;

  constructor(private store: Store<CartState>) {}

  ngOnInit() {
    this.cartCount$ = this.store.select(s => s.cart.items).map(items => items.length);
  }
}
