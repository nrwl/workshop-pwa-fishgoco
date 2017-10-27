import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { feedReducer } from './+state/feed.reducer';
import { feedInitialState } from './+state/feed.init';
import { FeedEffects } from './+state/feed.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

const routes: Route[] = [{ path: '', component: FeedComponent }];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('feed', feedReducer, { initialState: feedInitialState }),
    EffectsModule.forFeature([FeedEffects]),
    StoreRouterConnectingModule
  ],
  declarations: [FeedComponent],
  providers: [FeedEffects]
})
export class FeedModule {}
