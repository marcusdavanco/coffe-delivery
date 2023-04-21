import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { AddressContainer } from "./styles";

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
        <form className="inputGroup">
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
        </form>
      </div>
    </AddressContainer>
  );
}
