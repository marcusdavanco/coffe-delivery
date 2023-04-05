import { ShoppingCart } from "phosphor-react";
import { ButtonHTMLAttributes } from "react";
import { BuyBtnContainer } from "./styles";

interface BuyBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function BuyBtn(props: BuyBtnProps) {
  return (
    <BuyBtnContainer {...props}>
      <ShoppingCart weight="fill" color={"white"} size={22} />
    </BuyBtnContainer>
  );
}
