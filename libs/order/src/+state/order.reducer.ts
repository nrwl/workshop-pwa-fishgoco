import { Order } from './order.interfaces';
import { OrderAction } from './order.actions';

export function orderReducer(state: Order, action: OrderAction): Order {
  switch (action.type) {
    case 'MENU_ITEMS_LOADED': {
      return { ...state, menuItems: action.payload };
    }
    default: {
      return state;
    }
  }
}
