import { createContext, ReactNode, useEffect, useReducer } from "react";
import {
  addProductAction,
  removeProductAction,
  updateProductAction,
} from "../reducers/product/actions";
import { productReducer, Product } from "../reducers/product/reducer";
import { PaymentOptions } from "../reducers/payment/reducer";
import { rootInitialState, rootReducer } from "../reducers";
import { setPaymentMethodAction } from "../reducers/payment/actions";
import { Address } from "../reducers/address/reducer";
import {
  clearAddressAction,
  setAddressAction,
} from "../reducers/address/actions";

interface CartContextType {
  products: Product[];
  addToCart: (data: Product) => void;
  updateCart: (id: string, amount: number) => void;
  removeFromCart: (id: string) => void;
  paymentMethod: string;
  setPaymentMethod: (value: string) => void;
  address: Address;
  setAddress: (address: Address) => void;
  clearAddress: () => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    rootReducer,
    rootInitialState,
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffe-delivery:cart-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );

  const { products, address, paymentMethod } = cartState;

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);
    localStorage.setItem("@coffe-delivery:cart-state-1.0.0", stateJSON);
  }, [cartState]);

  function addToCart(data: Product) {
    dispatch(addProductAction(data));
  }

  function updateCart(id: string, amount: number) {
    dispatch(updateProductAction(id, amount));
  }

  function removeFromCart(id: string) {
    dispatch(removeProductAction(id));
  }

  function setPaymentMethod(value: string) {
    dispatch(setPaymentMethodAction(value));
  }

  function setAddress(address: Address) {
    dispatch(setAddressAction(address));
  }

  function clearAddress() {
    dispatch(clearAddressAction());
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        updateCart,
        removeFromCart,
        paymentMethod,
        setPaymentMethod,
        address,
        setAddress,
        clearAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
