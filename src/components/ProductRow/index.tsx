import { ProductRowContainer } from "./styles";
import { AmountSelector } from "../AmountSelector";
import { Button } from "../Button";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import { Product } from "../../reducers/cart/reducer";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

interface ProductRowProps {
  product: Product;
}

export const ProductRow = ({ product }: ProductRowProps) => {
  const { products, removeFromCart } = useContext(CartContext);
  const theme = useTheme();

  console.log(products);

  return (
    <ProductRowContainer>
      <img src={product.image} alt="coffe" />
      <div>
        <p>{product.name}</p>
        <div>
          <AmountSelector size="sm" />
          <Button
            icon={<Trash size={16} color={theme["purple-500"]} />}
            description="Remover"
            type="button"
            size="sm"
            onClick={() => removeFromCart(product.id)}
          />
        </div>
      </div>
      <span>
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(product.price)}
      </span>
    </ProductRowContainer>
  );
};
