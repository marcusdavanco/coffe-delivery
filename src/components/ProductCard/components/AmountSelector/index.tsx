import { AmountSelectorContainer } from "./styles";

export function AmounSelector() {
  return (
    <AmountSelectorContainer>
      <button>+</button>
      <input type='number' min={1} />
      <button>-</button>
    </AmountSelectorContainer>
  )
}