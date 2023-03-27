import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { BannerContainer } from './styles';
import CoffeBannerPhoto from '../../../../assets/CoffeBannerPhoto.png'

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <p>Encontre o café perfeito<br/>
        para qualquer hora do dia</p>
        <span>Com o Coffee Delivery voce recebeu seu café onde estiver, a qualquer hora</span>

        <div>
          <div>
            <div className='icon-bg orange'>
              <ShoppingCart weight='fill' color='white'/>
            </div>
              <span>Compra simples e segura</span>
          </div>
         
          <div>
            <div className='icon-bg gray'>
              <Package weight='fill' color='white'/>
            </div>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <div className='icon-bg yellow'>
              <Timer weight='fill' color='white'/>
            </div>
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <div className='icon-bg purple'>
              <Coffee weight='fill' color='white'/>
            </div>
            <span>O café chega fresquinho até você</span>
          </div>
        </div>
      </div>
      <img src={CoffeBannerPhoto} alt="Copo de café com grãos ao fundo" />      
    </BannerContainer>
  )
}