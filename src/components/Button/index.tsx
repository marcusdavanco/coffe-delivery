import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  description: string;
}

export function Button({ icon, description, ...rest }: ButtonProps) {
  return (
    <ButtonContainer {...rest}>
      {icon}
      <span>{description}</span>
    </ButtonContainer>
  );
}
