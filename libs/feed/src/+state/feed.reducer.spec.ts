import { feedReducer } from './feed.reducer';
import { feedInitialState } from './feed.init';
import { Feed } from './feed.interfaces';
import { DataLoaded } from './feed.actions';

describe('feedReducer', () => {
  it('should work', () => {
    const state: Feed = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = feedReducer(state, action);
    expect(actual).toEqual({});
  });
});
