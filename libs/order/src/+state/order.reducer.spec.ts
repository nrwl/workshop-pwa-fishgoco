import { orderReducer } from './order.reducer';
import { orderInitialState } from './order.init';
import { Order } from './order.interfaces';
import { DataLoaded } from './order.actions';

describe('orderReducer', () => {
  it('should work', () => {
    const state: Order = {};
    const action: DataLoaded = { type: 'DATA_LOADED', payload: {} };
    const actual = orderReducer(state, action);
    expect(actual).toEqual({});
  });
});
