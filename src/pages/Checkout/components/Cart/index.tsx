import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { Summary } from "./components/Summary";
import { CartContainer } from "./styles";
import { ProductRow } from "./components/ProductRow";

export function Cart() {
  const { products } = useContext(CartContext);

  return (
    <CartContainer>
      <p className="title">Cafés selecionados</p>
      <div className="card cart">
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}

        <Summary />

        <button type="submit">Confirmar Pedido</button>
      </div>
    </CartContainer>
  );
}
