import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FeedState, NewsItem } from '@fishgoco-pwa/feed';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  newsItems$: Observable<NewsItem[]>;

  constructor(private store: Store<FeedState>) {}

  ngOnInit() {
    this.newsItems$ = this.store.select(s => s.feed.newsItems);
  }
}
