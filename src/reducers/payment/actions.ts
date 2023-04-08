export enum ActionTypes {
  SET_PAYMENT_METHOD = "SET_PAYMENT_METHOD",
  CLEAR_PAYMENT_METHOD = "CLEAR_PAYMENT_METHOD",
}

export function setPaymentMethodAction(newPaymentOption: string) {
  return {
    type: ActionTypes.SET_PAYMENT_METHOD,
    payload: {
      paymentMethod: newPaymentOption,
    },
  };
}

export function clearPaymentMethodAction() {
  return {
    type: ActionTypes.CLEAR_PAYMENT_METHOD,
  };
}
