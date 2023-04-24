import { Address } from "./reducer";

export enum ActionTypes {
  SET_ADDRESS = "SET_ADDRESS",
  CLEAR_ADDRESS = "CLEAR_ADDRESS",
}

export function setAddressAction(newAddress: Address) {
  return {
    type: ActionTypes.SET_ADDRESS,
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
