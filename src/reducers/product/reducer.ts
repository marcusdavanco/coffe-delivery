import { produce } from "immer";
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

export interface ProductState {
  products: Product[];
}

export function productReducer(state: ProductState, action: any) {
  const productIndex = state.products.findIndex((product) => {
    return product.id === action.payload.id;
  });

  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return produce(state, (draft) => {
        draft.products.push(action.payload.product);
      });
    case ActionTypes.UPDATE_PRODUCT:
      return produce(state, (draft) => {
        draft.products[productIndex].amount = action.payload.amount;
      });

    case ActionTypes.REMOVE_PRODUCT:
      if (productIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.products.splice(productIndex, 1);
      });

    default:
      return state;
  }
}
