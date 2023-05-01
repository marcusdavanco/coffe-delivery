import { Product } from "./reducer";

export enum ActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CLEAR_PRODUCT = "CLEAR_PRODUCT",
}

export function addProductAction(newProduct: Product) {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      product: newProduct,
    },
  };
}

export function updateProductAction(id: string, amount: number) {
  return {
    type: ActionTypes.UPDATE_PRODUCT,
    payload: {
      id,
      amount,
    },
  };
}

export function removeProductAction(id: string) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      id,
    },
  };
}

export function clearProductAction() {
  return {
    type: ActionTypes.CLEAR_PRODUCT,
    payload: {
      product: [],
    },
  };
}
