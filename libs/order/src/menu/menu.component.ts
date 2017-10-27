import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { MenuItem, OrderState } from '@fishgoco-pwa/order';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems$: Observable<MenuItem[]>;

  constructor(private store: Store<OrderState>) {}

  ngOnInit() {
    this.menuItems$ = this.store.select(s => s.order.menuItems);
  }
}
