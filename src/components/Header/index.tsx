import { MapPin } from "phosphor-react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import coffeDeliveryLogo from "../../assets/Logo.svg";
import { CartButton } from "./components/CartButton";
import { HeaderContainer } from "./styles";
import { useContext } from "react";
import { GeolocationContext } from "../../contexts/GeolocationContext";

export function Header() {
  const theme = useTheme();
  const { latitude, longitude, locality, principalSubdivisionCode } = useContext(GeolocationContext);

  console.log("LATITUDE", latitude);
  console.log("LONGITUDE", longitude);

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeDeliveryLogo} />
      </Link>
      <div>
        <div>
          <MapPin color={theme["purple-500"]} weight="fill" />
          <span>{ locality }, { principalSubdivisionCode }</span>
        </div>
        <CartButton />
      </div>
    </HeaderContainer>
  );
}
