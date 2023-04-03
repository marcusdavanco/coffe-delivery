import { ProductRowContainer } from "./styles";
import expresso from "../../assets/expresso.png";
import { AmountSelector } from "../AmountSelector";
import { Button } from "../Button";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";

export const ProductRow = () => {
  const theme = useTheme();

  return (
    <ProductRowContainer>
      <img src={expresso} alt="coffe" />
      <div>
        <p>Expreso Tradicional</p>
        <div>
          <AmountSelector size="sm" />
          <Button
            icon={<Trash size={16} color={theme["purple-500"]} />}
            description="Remover"
            type="button"
            size="sm"
          />
        </div>
      </div>
      <span>R$ 9,90</span>
    </ProductRowContainer>
  );
};
