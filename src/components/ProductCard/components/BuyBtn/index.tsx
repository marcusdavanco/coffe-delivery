import { ShoppingCart } from "phosphor-react";
import { BuyBtnContainer } from "./styles";

export function BuyBtn() {
  return (
    <BuyBtnContainer>
      <ShoppingCart weight='fill' />
    </BuyBtnContainer>
  )
}