import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import 'rxjs/add/operator/switchMap';
import { FeedState } from './feed.interfaces';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { FeedComponent } from '../feed/feed.component';

@Injectable()
export class FeedEffects {
  @Effect()
  navigateToFeed = this.d.navigation(FeedComponent, {
    run: (a, state) => {
      if (state.feed.newsItems.length > 0) {
        return null;
      }
      return this.httpClient.get('/assets/news.json').map(r => {
        return {
          type: 'NEWS_ITEMS_LOADED',
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

  constructor(private actions: Actions, private d: DataPersistence<FeedState>, private httpClient: HttpClient) {}
}
