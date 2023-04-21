import { CurrencyDollar, MapPinLine, Timer } from "phosphor-react";
import { SuccessContainer } from "./styles";
import delivery from "../../assets/delivery.png";

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <div className="title">
          <h2>Uhu! Pedido confirmado</h2>
          <span>Agora é só aguardar que logo o café chegará até você</span>
        </div>
        <section>
          <div>
            <div className="circle purple">
              <MapPinLine color="white" weight="fill" size="16" />
            </div>
            <div>
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <span>Cartão de Crédito</span>
            </div>
          </div>
        </section>
      </div>
      <img src={delivery} alt="entregador com moto" />
    </SuccessContainer>
  );
}
