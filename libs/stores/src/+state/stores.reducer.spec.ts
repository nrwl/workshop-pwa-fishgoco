import { storesReducer } from './stores.reducer';
import { storesInitialState } from './stores.init';
import { Stores } from './stores.interfaces';
import { DataLoaded } from './stores.actions';

describe('storesReducer', () => {
  it('should work', () => {
    const state: Stores = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = storesReducer(state, action);
    expect(actual).toEqual({});
  });
});
