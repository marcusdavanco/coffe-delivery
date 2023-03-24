import { MapPin } from 'phosphor-react'
import { useTheme } from 'styled-components'
import coffeDeliveryLogo from '../../assets/Logo.svg'
import { CartButton } from './components/CartButton'
import {HeaderContainer} from './styles'



export function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <img src={coffeDeliveryLogo} />
      <div>
          <div>
            <MapPin color={theme['purple-500']} weight='fill'/>
            <span>Carapicuíba, SP</span>        
          </div>
         <CartButton />
      </div>
    </HeaderContainer>
  )
}