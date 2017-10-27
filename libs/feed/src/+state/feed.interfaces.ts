export interface NewsItem {
  title: string;
  message: string;
  imageUrl?: string;
  dateTime: string;
}
export interface Feed {
  newsItems: NewsItem[];
}

export interface FeedState {
  readonly feed: Feed;
}
