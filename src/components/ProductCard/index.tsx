import { AmountSelector } from "../../components/AmountSelector";
import { BuyBtn } from "./components/BuyBtn";
import { ProductCardContainer } from "./styles";

interface ProductCardProps {
  image: string;
  categories: string[]
  name: string;
  description: string;
  price: number;
}

export function ProductCard({ image, categories, name, description, price } : ProductCardProps) {

  return (
    <ProductCardContainer>
      <img src={image} alt={image}/>
      <div className='categories'>
        {
          categories.map(category => <span>{category}</span>)
        }
      </div>
      <p className="title">{name}</p>
      <p className="description">{description}</p>
      <div className='addToCart'>
        <div className='price'>
          <span className='symbol'>{`R$ `}</span>
          <span className='value'>{new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(price)}</span>        
        </div>
        <AmountSelector />
        <BuyBtn />
      </div>
    </ProductCardContainer>
  )
}