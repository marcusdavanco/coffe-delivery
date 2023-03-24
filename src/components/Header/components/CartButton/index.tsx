import { useTheme } from 'styled-components';
import { ButtonContainer } from "./styles";
import { ShoppingCart } from 'phosphor-react';

export function CartButton() {
  const theme = useTheme()

  return (
    <ButtonContainer >      
      <div className="badge">
        3
      </div>
      <ShoppingCart color={theme['yellow-700']} size={32} weight='fill'/>
    </ButtonContainer>
  )
} 