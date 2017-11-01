import { Cart } from './cart.interfaces';

export const cartInitialState: Cart = {
  items: [
    {
      id: "5",
      name: "Flounder",
      imageUrl: "/assets/images/flounder",
      pricePerPound: 10.79,
      quantity: 1
    }
  ]
};
