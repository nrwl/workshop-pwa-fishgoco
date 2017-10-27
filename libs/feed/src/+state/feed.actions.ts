import { NewsItem } from '@fishgoco-pwa/feed';

export interface LoadData {
  type: 'LOAD_NEWS_ITEMS';
  payload: {};
}

export interface DataLoaded {
  type: 'NEWS_ITEMS_LOADED';
  payload: NewsItem[];
}

export type FeedAction = LoadData | DataLoaded;
