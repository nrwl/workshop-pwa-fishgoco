export interface Cart {
  menuItemIds: string[];
}

export interface CartState {
  readonly cart: Cart;
}
