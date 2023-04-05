import { useContext } from "react";
import { AmountSelector } from "../../components/AmountSelector";
import { CartContext } from "../../contexts/CartContext";
import { Product } from "../../reducers/cart/reducer";
import { BuyBtn } from "./components/BuyBtn";
import { ProductCardContainer } from "./styles";

interface ProductCardProps {
  id: string;
  image: string;
  categories: string[];
  name: string;
  description: string;
  price: number;
}

export function ProductCard({
  id,
  image,
  categories,
  name,
  description,
  price,
}: ProductCardProps) {
  const { addToCart } = useContext(CartContext);

  return (
    <ProductCardContainer>
      <img src={image} alt={image} />
      <div className="categories">
        {categories.map((category) => (
          <span>{category}</span>
        ))}
      </div>
      <p className="title">{name}</p>
      <p className="description">{description}</p>
      <div className="addToCart">
        <div className="price">
          <span className="symbol">{`R$ `}</span>
          <span className="value">
            {new Intl.NumberFormat("pt-BR", {
              minimumFractionDigits: 2,
            }).format(price)}
          </span>
        </div>
        <AmountSelector />
        <BuyBtn
          onClick={() =>
            addToCart({
              id,
              image,
              categories,
              name,
              description,
              price,
              amount: 1,
            })
          }
        />
      </div>
    </ProductCardContainer>
  );
}
