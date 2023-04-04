import { createContext } from "react";
import { Product } from "../reducers/cart/reducer";

interface CartContextType {
  products: Product[];
}

export const CartContext = createContext({} as CartContextType);
