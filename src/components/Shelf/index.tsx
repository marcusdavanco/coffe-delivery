import { ProductCard } from "../ProductCard"
import expressoTradicional from '../../assets/expresso.png'
import expressoAmericano from '../../assets/americano.png'
import expressoCremoso from '../../assets/expresso_cremoso.png'
import expressoGelado from '../../assets/cafe_gelado.png'
import cafeComLeite from '../../assets/cafe_com_leite.png'
import latte from '../../assets/latte.png'
import capuccino from '../../assets/capuccino.png'
import macchiato from '../../assets/macchiato.png'
import mocaccino from '../../assets/mochaccino.png'
import chocolateQuente from '../../assets/chocolate_quente.png'
import cubano from '../../assets/cubano.png'
import havaiano from '../../assets/havaiano.png'
import arabe from '../../assets/arabe.png'
import irlandes from '../../assets/irlandes.png'
import { ShelfContainer } from "./styles"


export function Shelf() {

  // TODO - Replace with MSW / MirageJS
  const productList = [{
    id: '1',
    image: expressoTradicional,
    categories: ['Tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.90,
  }, {
    id: '2',
    image: expressoAmericano,
    categories: ['Tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído',
    price: 9.90,
  }, {
    id: '3',
    image: expressoCremoso,
    categories: ['Tradicional'],
    name: 'Expreso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.90,
  }, {
    id: '4',
    image: expressoGelado,
    categories: ['Tradicional', 'Gelado'],
    name: 'Expresso Gelado',
    description: '',
    price: 9.90,
  }, {
    id: '5',
    image: cafeComLeite,
    categories: ['Tradicional', 'Com Leite'],
    name: 'Café com Leite',
    description: '',
    price: 9.90,
  }, {
    id: '6',
    image: latte,
    categories: ['Tradicional', 'Com Leite'],
    name: 'Latte',
    description: '',
    price: 9.90,
  }, {
    id: '7',
    image: capuccino,
    categories: ['Tradicional', 'Com Leite'],
    name: 'Capuccino',
    description: '',
    price: 9.90,
  }, {
    id: '8',
    image: macchiato,
    categories: ['Especial', 'Com Leite'],
    name: 'Macchiato',
    description: '',
    price: 9.90,
  },{
    id: '9',
    image: mocaccino,
    categories: ['Tradicional', 'Com Leite'],
    name: 'Mocaccino',
    description: '',
    price: 9.90,
  }, {
    id: '10',
    image: chocolateQuente,
    categories: ['Especial', 'Com Leite'],
    name: 'Chocolate Quente',
    description: '',
    price: 9.90,
  }, {
    id: '11',
    image: cubano,
    categories: ['Especial', 'Alcoólico', 'Gelado'],
    name: 'Cubano',
    description: '',
    price: 9.90,
  }, {
    id: '12',
    image: havaiano,
    categories: ['Especial'],
    name: 'Havaiano',
    description: '',
    price: 9.90,
  }, {
    id: '13',
    image: arabe,
    categories: ['Especial'],
    name: 'Árabe',
    description: '',
    price: 9.90,
  }, {
    id: '14',
    image: irlandes,
    categories: ['Especial', 'Alcoólico'],
    name: 'Irlandês',
    description: '',
    price: 9.90,
  }]

  return (
    <ShelfContainer>
      {
        productList.map(product => <ProductCard 
          key={product.id} 
          categories={product.categories} 
          description={product.description} 
          image={product.image} 
          name={product.name} 
          price={product.price}
        />
        )
      }  
    </ShelfContainer>
    
  )
}