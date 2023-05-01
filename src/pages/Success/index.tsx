import { CurrencyDollar, MapPinLine, Timer } from "phosphor-react";
import { SuccessContainer } from "./styles";
import delivery from "../../assets/delivery.png";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Success() {
  const {
    address: { address },
    paymentMethod: { paymentMethod },
  } = useContext(CartContext);

  function getPaymentMethodText(paymentMethod: string) {
    switch (paymentMethod) {
      case "MONEY":
        return "Dinheiro";
      case "CREDIT_CARD":
        return "Cartão de crédito";
      case "DEBIT_CARD":
        return "Cartão de débito";
    }
  }

  console.log("ADDRESS", address), console.log("PAYMENT METHOD", paymentMethod);

  return (
    <SuccessContainer>
      <div>
        <div className="title">
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </div>
        <section className="card">
          <div>
            <div className="circle purple">
              <MapPinLine color="white" weight="fill" size="16" />
            </div>
            <div>
              <p>
                Entrega em{" "}
                <span>
                  {address.street}, {address.number}{" "}
                  {address.complement && `, ${address.complement}`}
                </span>
              </p>
              <p>
                {address.neighborhood} - {address.city}, {address.state}
              </p>
            </div>
          </div>
          <div>
            <div className="circle yellow">
              <Timer color="white" weight="fill" size="16" />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <span>20 min - 30 min</span>
            </div>
          </div>
          <div>
            <div className="circle yellow dark ">
              <CurrencyDollar color="white" weight="fill" size="16" />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <span className="paymentMethod">
                {getPaymentMethodText(paymentMethod)}
              </span>
            </div>
          </div>
        </section>
      </div>
      <img src={delivery} alt="entregador com moto" />
    </SuccessContainer>
  );
}
