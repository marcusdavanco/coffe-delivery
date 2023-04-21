import { CheckoutContainer } from "./styles";
import { Payment } from "./components/Payment";
import { Address } from "./components/Address";
import { Cart } from "./components/Cart";

export function Checkout() {
  return (
    <CheckoutContainer>
      <section className="left-container">
        <Address />
        <Payment />
      </section>
      <Cart />
    </CheckoutContainer>
  );
}
