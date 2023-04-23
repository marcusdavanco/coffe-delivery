import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { Button } from "../../../../components/Button";

import { useTheme } from "styled-components";
import { PaymentContainer } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { PaymentOptions } from "../../../../reducers/payment/reducer";

export function Payment() {
  const { setPaymentMethod } = useContext(CartContext);
  const theme = useTheme();

  return (
    <PaymentContainer className="card">
      <div className="subtitle">
        <CurrencyDollar size={22} color={theme["purple-500"]} />
        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </div>
      <div className="buttonGroup">
        <Button
          icon={<CreditCard size={16} color={theme["purple-500"]} />}
          description="cartão de crédito"
          type="button"
          onClick={() => setPaymentMethod(PaymentOptions.CREDIT_CARD)}
        />
        <Button
          icon={<Bank size={16} color={theme["purple-500"]} />}
          description="cartão de débito"
          type="button"
          onClick={() => setPaymentMethod(PaymentOptions.DEBIT_CARD)}
        />
        <Button
          icon={<Money size={16} color={theme["purple-500"]} />}
          description="dinheiro"
          type="button"
          onClick={() => setPaymentMethod(PaymentOptions.MONEY)}
        />
      </div>
    </PaymentContainer>
  );
}
