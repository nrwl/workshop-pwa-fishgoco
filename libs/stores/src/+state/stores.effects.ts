import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import 'rxjs/add/operator/switchMap';
import { StoresState } from './stores.interfaces';
import { StoresComponent } from '../stores/stores.component';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoresEffects {
  @Effect()
  navigateToStores = this.d.navigation(StoresComponent, {
    run: (a, state) => {
      if (state.stores.storeLocations.length > 0) {
        return null;
      }
      return this.httpClient.get('/assets/stores.json').map(r => {
        return {
          type: 'STORE_LOCATIONS_LOADED',
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

  constructor(private actions: Actions, private d: DataPersistence<StoresState>, private httpClient: HttpClient) {}
}
