import { AmounSelector } from "./components/AmountSelector";
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
        <span>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(price)}</span>        
        <AmounSelector />
      </div>
    </ProductCardContainer>
  )
}