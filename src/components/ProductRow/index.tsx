import { ProductRowContainer } from "./styles";
import { AmountSelector } from "../AmountSelector";
import { Button } from "../Button";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import { Product } from "../../reducers/product/reducer";
import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../contexts/CartContext";

interface ProductRowProps {
  product: Product;
}

export const ProductRow = ({ product }: ProductRowProps) => {
  const { products, removeFromCart, updateCart } = useContext(CartContext);
  const amountRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();

  useEffect(() => {
    updateCart(product.id, +amountRef.current!.value);
  }, [amountRef.current?.value]);

  console.log(products);

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
