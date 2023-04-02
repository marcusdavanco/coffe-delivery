import styled from "styled-components";

interface AmountSelectorContainerProps {
  size: "md" | "sm";
}

export const AmountSelectorContainer = styled.div<AmountSelectorContainerProps>`
  background-color: ${(props) => props.theme["base-button"]};
  position: relative;
  border-radius: 6px;
  display: flex;
  max-width: 4.5rem;

  input {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    height: ${(props) => (props.size === "md" ? "2.375rem" : "unset")};

    text-align: center;
    width: 100%;

    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    position: absolute;
    background: transparent;
    border: none;
    cursor: pointer;

    &.minus {
      left: 0.5rem;
      top: ${(props) => (props.size === "md" ? "0.75rem" : "0.5rem")};
    }

    &.plus {
      right: 0.5rem;
      top: ${(props) => (props.size === "md" ? "0.75rem" : "0.5rem")};
    }
  }
`;
