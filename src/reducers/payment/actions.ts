export enum ActionTypes {
  SET_PAYMENT_METHOD = "SET_PAYMENT_METHOD",
}

export function setPaymentMethodAction(paymentMethod: string) {
  return {
    type: ActionTypes.SET_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  };
}
