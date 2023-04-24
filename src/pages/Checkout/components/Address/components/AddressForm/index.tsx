import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer } from "./styles";
import {
  Address,
  AddressSchema,
} from "../../../../../../reducers/address/reducer";
import { CartContext } from "../../../../../../contexts/CartContext";
import { useContext } from "react";

export function AddressForm() {
  const { setAddress } = useContext(CartContext);
  const { register, handleSubmit, watch } = useForm<Address>({
    resolver: zodResolver(AddressSchema),
    defaultValues: {
      zipCode: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  function onSubmit(data: Address) {
    setAddress(data);
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
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
    </FormContainer>
  );
}
