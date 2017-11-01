import { Cart } from './cart.interfaces';
import { CartAction } from './cart.actions';

export function cartReducer(state: Cart, action: CartAction): Cart {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const menuItemIds = [...state.menuItemIds];
      if (menuItemIds.indexOf(action.payload) < 0) {
        menuItemIds.push(action.payload);
      }
      return { ...state, menuItemIds };
    }
    case 'CLEAR_CART': {
      return { ...state, menuItemIds: [] };
    }
    default: {
      return state;
    }
  }
}
