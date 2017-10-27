import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { StoresComponent } from './stores/stores.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storesReducer } from './+state/stores.reducer';
import { storesInitialState } from './+state/stores.init';
import { StoresEffects } from './+state/stores.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [{ path: '', component: StoresComponent }];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('stores', storesReducer, { initialState: storesInitialState }),
    EffectsModule.forFeature([StoresEffects]),
    StoreRouterConnectingModule
  ],
  declarations: [StoresComponent],
  providers: [StoresEffects]
})
export class StoresModule {}
