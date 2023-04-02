import { MapPin } from "phosphor-react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";
import coffeDeliveryLogo from "../../assets/Logo.svg";
import { CartButton } from "./components/CartButton";
import { HeaderContainer } from "./styles";

export function Header() {
  const theme = useTheme();

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeDeliveryLogo} />
      </Link>
      <div>
        <div>
          <MapPin color={theme["purple-500"]} weight="fill" />
          <span>Porto Alegre, RS</span>
        </div>
        <CartButton />
      </div>
    </HeaderContainer>
  );
}
