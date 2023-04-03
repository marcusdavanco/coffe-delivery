import { Minus, Plus } from "phosphor-react";
import { useTheme } from "styled-components";
import { AmountSelectorContainer } from "./styles";

interface AmountSelectorProps {
  size?: "md" | "sm";
}

export function AmountSelector({ size = "md" }: AmountSelectorProps) {
  const theme = useTheme();

  return (
    <AmountSelectorContainer size={size}>
      <button className="minus">
        <Minus size={14} color={theme["purple-500"]} />
      </button>
      <input type="number" min={1} value={1} />
      <button className="plus">
        <Plus size={14} color={theme["purple-500"]} />
      </button>
    </AmountSelectorContainer>
  );
}
