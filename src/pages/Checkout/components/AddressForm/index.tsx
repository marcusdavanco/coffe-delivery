import { useFormContext } from "react-hook-form";
import { AddressFormContainer } from "./styles";

export function AddressForm() {
  const { register } = useFormContext();

  return (
    <AddressFormContainer>
      <input placeholder="CEP" {...register("zipCode")} />
      <input placeholder="Rua" {...register("street")} />
      <div className="multiple">
        <input placeholder="Número" {...register("number")} />
        <div className="inputWrapper">
          <input placeholder="Complemento" {...register("complement")} />
        </div>
      </div>
      <div className="multiple">
        <input placeholder="Bairro" {...register("neighborhood")} />
        <input placeholder="Cidade" {...register("city")} />
        <input placeholder="UF" {...register("state")} />
      </div>
    </AddressFormContainer>
  );
}
