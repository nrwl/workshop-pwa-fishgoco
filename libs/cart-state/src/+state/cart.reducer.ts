import { Cart } from './cart.interfaces';
import { CartAction } from './cart.actions';

export function cartReducer(state: Cart, action: CartAction): Cart {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const items = [...state.items];
      if (!items.some(i => i.id === action.payload.id)) {
        items.push(action.payload);
      }
      return { ...state, items };
    }
    case 'REMOVE_ITEM': {
      const items = [...state.items];
      items.splice(items.findIndex(i => i.id === action.payload.id), 1);
      return { ...state, items };
    }
    case 'CLEAR_CART': {
      return { ...state, items: [] };
    }
    default: {
      return state;
    }
  }
}
