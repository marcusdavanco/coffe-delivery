import { ProductRowContainer } from "./styles";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { Product } from "../../../../reducers/product/reducer";
import { AmountSelector } from "../../../../components/AmountSelector";
import { Button } from "../../../../components/Button";

interface ProductRowProps {
  product: Product;
}

export const ProductRow = ({ product }: ProductRowProps) => {
  const { removeFromCart, updateCart } = useContext(CartContext);
  const amountRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  const handleUpdateAmount = (value: number) => {
    updateCart(product.id, value);
  };

  return (
    <ProductRowContainer>
      <img src={product.image} alt="coffe" />
      <div>
        <p>{product.name}</p>
        <div>
          <AmountSelector
            size="sm"
            initialValue={product.amount}
            ref={amountRef}
            handleUpdateAmount={handleUpdateAmount}
          />
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
