import { ActionTypes } from "./actions";

export interface Product {
  id: string;
  image: string;
  categories: string[];
  name: string;
  description: string;
  price: number;
  amount: number;
}

export interface CartState {
  products: product[];
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:

    case ActionTypes.REMOVE_PRODUCT:
    default:
      return state;
  }
}
