import { ActionTypes } from "./actions";

export enum PaymentOptions {
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  MONEY = "MONEY",
}

export interface PaymentMethodState {
  paymentMethod: string;
}

export function paymentMethodReducer(state: PaymentMethodState, action: any) {
  switch (action.type) {
    case ActionTypes.SET_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload.paymentMethod,
      };
    case ActionTypes.CLEAR_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: "",
      };
    default:
      return state;
  }
}
