import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormContainer } from "./styles";
import {
  Address,
  AddressSchema,
} from "../../../../../../reducers/address/reducer";

export function AddressForm() {
  const { register, handleSubmit } = useForm<Address>({
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

  return (
    <FormContainer>
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
