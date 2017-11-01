export interface AddToCart {
  type: 'ADD_TO_CART';
  payload: string;
}

export interface ClearCart {
  type: 'CLEAR_CART';
  payload: {};
}

export type CartAction = AddToCart | ClearCart;
