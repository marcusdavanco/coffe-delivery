import { ProductCard } from "../ProductCard"

export function Shelf() {

  const productList = [1,2,3,4,5,6]

  return (
    productList.map(product => <ProductCard />)
  )
}