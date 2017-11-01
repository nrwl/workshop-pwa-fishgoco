import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import 'rxjs/add/operator/switchMap';
import { OrderState } from './order.interfaces';
import { MenuComponent } from '../menu/menu.component';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderEffects {
  @Effect()
  navigateToMenu = this.d.navigation(MenuComponent, {
    run: (a, state) => {
      if (state.order.menuItems.length > 0) {
        return null;
      }
      return this.httpClient.get('/assets/menu.json').map(r => {
        return {
          type: 'MENU_ITEMS_LOADED',
          payload: r
        };
      });
    },
    onError: (a, e: any) => {
      // we can log and error here and return null
      // we can also navigate back
      return null;
    }
  });

  constructor(private actions: Actions, private d: DataPersistence<OrderState>, private httpClient: HttpClient) {}
}
