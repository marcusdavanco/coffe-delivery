import { Minus, Plus } from "phosphor-react";
import { useState, forwardRef, FormEvent, ChangeEvent } from "react";
import { useTheme } from "styled-components";
import { AmountSelectorContainer } from "./styles";

interface AmountSelectorProps {
  size?: "md" | "sm";
  initialValue?: number;
}

export const AmountSelector = forwardRef(
  ({ size = "md", initialValue = 1 }: AmountSelectorProps, ref: any) => {
    const [value, setValue] = useState(initialValue);
    const theme = useTheme();

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
      setValue(+event.target.value);
    }

    return (
      <AmountSelectorContainer size={size}>
        <button
          type="button"
          className="minus"
          onClick={() => {
            value - 1 > 0 && setValue(value - 1);
          }}
        >
          <Minus size={14} color={theme["purple-500"]} />
        </button>
        <input
          ref={ref}
          type="number"
          min={1}
          value={value}
          onChange={handleChange}
        />
        <button
          type="button"
          className="plus"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          <Plus size={14} color={theme["purple-500"]} />
        </button>
      </AmountSelectorContainer>
    );
  }
);
