import { ProductCard } from "../ProductCard";
import expressoTradicional from "../../assets/expresso.png";
import expressoAmericano from "../../assets/americano.png";
import expressoCremoso from "../../assets/expresso_cremoso.png";
import expressoGelado from "../../assets/cafe_gelado.png";
import cafeComLeite from "../../assets/cafe_com_leite.png";
import latte from "../../assets/latte.png";
import capuccino from "../../assets/capuccino.png";
import macchiato from "../../assets/macchiato.png";
import mocaccino from "../../assets/mochaccino.png";
import chocolateQuente from "../../assets/chocolate_quente.png";
import cubano from "../../assets/cubano.png";
import havaiano from "../../assets/havaiano.png";
import arabe from "../../assets/arabe.png";
import irlandes from "../../assets/irlandes.png";
import { ShelfContainer, Wrapper } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Shelf() {
  const { products } = useContext(CartContext);

  console.log("PRODUCTS", products);

  // TODO - Replace with MSW / MirageJS
  const productList = [
    {
      id: "1",
      image: expressoTradicional,
      categories: ["Tradicional"],
      name: "Expresso Tradicional",
      description: "O tradicional café feito com água quente e grãos moídos",
      price: 9.9,
    },
    {
      id: "2",
      image: expressoAmericano,
      categories: ["Tradicional"],
      name: "Expresso Americano",
      description: "Expresso diluído",
      price: 9.9,
    },
    {
      id: "3",
      image: expressoCremoso,
      categories: ["Tradicional"],
      name: "Expreso Cremoso",
      description: "Café expresso tradicional com espuma cremosa",
      price: 9.9,
    },
    {
      id: "4",
      image: expressoGelado,
      categories: ["Tradicional", "Gelado"],
      name: "Expresso Gelado",
      description: "Bebida preparada com café expresso e cubos de gelo",
      price: 9.9,
    },
    {
      id: "5",
      image: cafeComLeite,
      categories: ["Tradicional", "Com Leite"],
      name: "Café com Leite",
      description: "Meio a meio de expresso tradicional com leite vaporizado",
      price: 9.9,
    },
    {
      id: "6",
      image: latte,
      categories: ["Tradicional", "Com Leite"],
      name: "Latte",
      description:
        "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      price: 9.9,
    },
    {
      id: "7",
      image: capuccino,
      categories: ["Tradicional", "Com Leite"],
      name: "Capuccino",
      description:
        "Bebida com canela feita de doses iguais de café, leite e espuma",
      price: 9.9,
    },
    {
      id: "8",
      image: macchiato,
      categories: ["Especial", "Com Leite"],
      name: "Macchiato",
      description:
        "Café expresso misturado com um pouco de leite quente e espuma",
      price: 9.9,
    },
    {
      id: "9",
      image: mocaccino,
      categories: ["Tradicional", "Com Leite"],
      name: "Mocaccino",
      description: "Café expresso com calda de chocolate, pouco leite e espuma",
      price: 9.9,
    },
    {
      id: "10",
      image: chocolateQuente,
      categories: ["Especial", "Com Leite"],
      name: "Chocolate Quente",
      description:
        "Bebida feita com chocolate dissolvido no leite quente e café",
      price: 9.9,
    },
    {
      id: "11",
      image: cubano,
      categories: ["Especial", "Alcoólico", "Gelado"],
      name: "Cubano",
      description:
        "Drink gelado de café expresso com rum, creme de leite e hortelã",
      price: 9.9,
    },
    {
      id: "12",
      image: havaiano,
      categories: ["Especial"],
      name: "Havaiano",
      description: "Bebida adocicada preparada com café e leite de coco",
      price: 9.9,
    },
    {
      id: "13",
      image: arabe,
      categories: ["Especial"],
      name: "Árabe",
      description: "Bebida preparada com grãos de café árabe e especiarias",
      price: 9.9,
    },
    {
      id: "14",
      image: irlandes,
      categories: ["Especial", "Alcoólico"],
      name: "Irlandês",
      description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      price: 9.9,
    },
  ];

  return (
    <ShelfContainer>
      <h2>Nossos cafés</h2>
      <Wrapper>
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            categories={product.categories}
            description={product.description}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </Wrapper>
    </ShelfContainer>
  );
}
