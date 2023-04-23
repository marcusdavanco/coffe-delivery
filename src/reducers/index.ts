import combineReducers from "react-combine-reducers";
import { productReducer } from "./product/reducer";
import { addressReducer } from "./address/reducer";
import { PaymentOptions, paymentMethodReducer } from "./payment/reducer";

export const [rootReducer, rootInitialState] = combineReducers({
  products: [productReducer, []],
  address: [addressReducer, {}],
  paymentMethod: [paymentMethodReducer, PaymentOptions.CREDIT_CARD],
});
