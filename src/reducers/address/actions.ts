import { Address } from "./reducer";

export enum ActionTypes {
  ADD_ADDRESS = "ADD_ADDRESS",
  CLEAR_ADDRESS = "CLEAR_ADDRESS",
}

export function addAddressAction(newAddress: Address) {
  return {
    type: ActionTypes.ADD_ADDRESS,
    payload: {
      address: newAddress,
    },
  };
}

export function clearAddressAction() {
  return {
    type: ActionTypes.CLEAR_ADDRESS,
    payload: {
      address: {},
    },
  };
}
