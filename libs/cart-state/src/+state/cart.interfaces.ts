export interface Cart {
  items: Item[];
}

export interface Item {
  id: string;
  name: string;
  imageUrl?: string;
  pricePerPound: number;
  quantity: number;
}

export interface CartState {
  readonly cart: Cart;
}
