import { Item } from './cart.interfaces';

export interface AddToCart {
  type: 'ADD_TO_CART';
  payload: Item;
}

export interface RemoveItem {
  type: 'REMOVE_ITEM';
  payload: Item;
}

export interface ClearCart {
  type: 'CLEAR_CART';
  payload: {};
}

export type CartAction = AddToCart | RemoveItem | ClearCart;
