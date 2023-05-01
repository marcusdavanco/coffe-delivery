import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { CheckoutContainer } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { Payment } from "./components/Payment";
import { ProductRow } from "./components/ProductRow";
import { Summary } from "./components/Summary";

export function Checkout() {
  const { products } = useContext(CartContext);
  const theme = useTheme();

  return (
    <CheckoutContainer>
      <form>
        <div className="delivery-options">
          <p className="title">Complete seu pedido</p>
          <div className="card address">
            <div className="subtitle">
              <MapPinLine size={22} color={theme["yellow-500"]} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <div className="inputGroup">
              <input name="cep" placeholder="CEP" />
              <input name="street" placeholder="Rua" />
              <div className="multiple">
                <input name="number" placeholder="Número" />
                <div className="inputWrapper">
                  <input name="complement" placeholder="Complemento" />
                </div>
              </div>
              <div className="multiple">
                <input name="neighborhood" placeholder="Bairro" />
                <input name="city" placeholder="Cidade" />
                <input name="state" placeholder="UF" />
              </div>
            </div>
          </div>
          <Payment />
        </div>
        <div>
          <p className="title">Cafés selecionados</p>
          <div className="card cart">
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}

            <Summary />
            <button type="submit">Confirmar Pedido</button>
          </div>
        </div>
      </form>
    </CheckoutContainer>
  );
}
