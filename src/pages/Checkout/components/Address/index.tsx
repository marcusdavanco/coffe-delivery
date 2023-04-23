import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { AddressContainer } from "./styles";
import { AddressForm } from "./components/AddressForm";

export function Address() {
  const theme = useTheme();

  return (
    <AddressContainer>
      <p className="title">Complete seu pedido</p>
      <div className="card address">
        <div className="subtitle">
          <MapPinLine size={22} color={theme["yellow-500"]} />
          <div>
            <p>Endereço de Entrega</p>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </div>
        </div>
        <AddressForm />
      </div>
    </AddressContainer>
  );
}
