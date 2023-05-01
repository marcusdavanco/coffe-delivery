import { useContext } from "react";
import { SummaryContainer } from "./styles";
import { CartContext } from "../../../../contexts/CartContext";

export function Summary() {
  const { products } = useContext(CartContext);

  return (
    <SummaryContainer>
      <table>
        <tbody>
          <tr>
            <th>Total de itens</th>
            <td>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                currencyDisplay: "symbol",
                minimumFractionDigits: 2,
              }).format(
                products.reduce(
                  (acc, product) => acc + product.price * product.amount,
                  0
                )
              )}
            </td>
          </tr>
          <tr>
            <th>Entrega</th>
            <td>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                currencyDisplay: "symbol",
                minimumFractionDigits: 2,
              }).format(products.length > 0 ? 3.5 : 0)}
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
                currencyDisplay: "symbol",
                minimumFractionDigits: 2,
              }).format(
                products.reduce(
                  (acc, product) => acc + product.price * product.amount,
                  products.length > 0 ? 3.5 : 0
                )
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </SummaryContainer>
  );
}
