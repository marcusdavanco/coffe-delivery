import { Minus, Plus } from "phosphor-react";
import { useTheme } from "styled-components";
import { AmountSelectorContainer } from "./styles";

export function AmountSelector() {
  const theme = useTheme();

  return (
    <AmountSelectorContainer>
      <button className='minus'>
        <Minus size={14} color={theme["purple-500"]}/>
      </button>
      <input type='number' min={1} value={1}/>
      <button className='plus'>
        <Plus size={14} color={theme["purple-500"]}/>
      </button>
    </AmountSelectorContainer>
  )
}