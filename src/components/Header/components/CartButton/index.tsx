import { useTheme } from "styled-components";
import { ButtonContainer } from "./styles";
import { ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../../contexts/CartContext";
import { useContext } from "react";

export function CartButton() {
  const theme = useTheme();
  const { products } = useContext(CartContext);

  return (
    <Link to="/checkout">
      <ButtonContainer>
        {products.length > 0 && <div className="badge">{products.length}</div>}
        <ShoppingCart color={theme["yellow-700"]} size={32} weight="fill" />
      </ButtonContainer>
    </Link>
  );
}
