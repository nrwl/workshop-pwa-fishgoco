export interface MenuItem {
  id: string;
  name: string;
  imageUrl?: string;
  pricePerPound: number;
}

export interface Order {
  menuItems: MenuItem[];
}

export interface OrderState {
  readonly order: Order;
}
