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

export function productReducer(state: Product[], action: any) {
  const productIndex = state.findIndex((product) => {
    return product.id === action.payload.id;
  });

  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return produce(state, (draft) => {
        draft.push(action.payload.product);
      });
    case ActionTypes.UPDATE_PRODUCT:
      return produce(state, (draft) => {
        draft[productIndex].amount = action.payload.amount;
      });
    case ActionTypes.CLEAR_PRODUCT:
      return produce(state, (draft) => {
        draft.splice(productIndex, draft.length + 1);
      });

    case ActionTypes.REMOVE_PRODUCT:
      if (productIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        draft.splice(productIndex, 1);
      });

    default:
      return state;
  }
}
