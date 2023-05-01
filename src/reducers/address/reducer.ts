import { ActionTypes } from "./actions";
import { z } from "zod";

export const AddressSchema = z.object({
  zipCode: z.string().min(1, "Insira o CEP"),
  street: z.string().min(1, "Insira o nome da Rua"),
  number: z.string().min(1, "Insira o número"),
  complement: z.string().optional(),
  neighborhood: z.string().min(1, "Insira o bairro"),
  city: z.string().min(1, "Insira a cidade"),
  state: z.string().min(1, "Insira a UF"),
});

export type Address = z.infer<typeof AddressSchema>;

export interface AddressState {
  address: Address;
}

export function addressReducer(state: AddressState, action: any) {
  switch (action.type) {
    case ActionTypes.SET_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
      };
    case ActionTypes.CLEAR_ADDRESS:
      return {
        ...state,
        address: {},
      };
    default:
      return state;
  }
}
