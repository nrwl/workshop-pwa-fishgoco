import { Feed } from './feed.interfaces';
import { FeedAction } from './feed.actions';

export function feedReducer(state: Feed, action: FeedAction): Feed {
  switch (action.type) {
    case 'NEWS_ITEMS_LOADED': {
      return {
        ...state,
        newsItems: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
