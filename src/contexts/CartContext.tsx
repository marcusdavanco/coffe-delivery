import { createContext, ReactNode, useEffect, useReducer } from "react";
import { cartReducer, Product } from "../reducers/cart/reducer";

interface CartContextType {
  products: Product[];
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
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
}
