import { createContext, ReactNode, useEffect, useReducer } from "react";
import {
  addProductAction,
  removeProductAction,
} from "../reducers/product/actions";
import { productReducer, Product } from "../reducers/product/reducer";

interface CartContextType {
  products: Product[];
  addToCart: (data: Product) => void;
  removeFromCart: (id: string) => void;
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    productReducer,
    {
      products: [],
    },
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

  const { products } = cartState;

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);
    localStorage.setItem("@coffe-delivery:cart-state-1.0.0", stateJSON);
  }, [cartState]);

  function addToCart(data: Product) {
    dispatch(addProductAction(data));
  }

  function removeFromCart(id: string) {
    dispatch(removeProductAction(id));
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
