import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  description: string;
  size: "md" | "sm";
}

export function Button({
  icon,
  description,
  size = "md",
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer size={size} {...rest}>
      {icon}
      <span>{description}</span>
    </ButtonContainer>
  );
}
