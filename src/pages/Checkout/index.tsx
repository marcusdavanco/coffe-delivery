import { MapPinLine } from "phosphor-react";
import { useTheme } from "styled-components";
import { CheckoutContainer } from "./styles";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { Payment } from "./components/Payment";
import { ProductRow } from "./components/ProductRow";
import { Summary } from "./components/Summary";
import { AddressForm } from "./components/AddressForm";
import { FormProvider, useForm } from "react-hook-form";
import { Address, AddressSchema } from "../../reducers/address/reducer";
import { zodResolver } from "@hookform/resolvers/zod";

export function Checkout() {
  const { products, setAddress } = useContext(CartContext);
  const theme = useTheme();

  const addressForm = useForm<Address>({
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

  const { handleSubmit } = addressForm;

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="delivery-options">
          <p className="title">Complete seu pedido</p>
          <div className="card address">
            <div className="subtitle">
              <MapPinLine size={22} color={theme["yellow-500"]} />
              <div>
                <p>Endereço de Entrega</p>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </div>
            <FormProvider {...addressForm}>
              <AddressForm />
            </FormProvider>
          </div>
          <Payment />
        </div>
        <div>
          <p className="title">Cafés selecionados</p>
          <div className="card cart">
            {products.map((product) => (
              <ProductRow key={product.id} product={product} />
            ))}

            <Summary />
            <button type="submit">Confirmar Pedido</button>
          </div>
        </div>
      </form>
    </CheckoutContainer>
  );
}
