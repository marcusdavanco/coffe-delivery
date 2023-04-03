import styled from "styled-components";

interface ButtonContainerProps {
  size: "md" | "sm";
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background-color: ${(props) => props.theme["base-button"]};
  cursor: pointer;
  display: flex;
  text-align: center;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme["base-text"]};
  font-size: ${(props) => props.theme["text-2"]};
  gap: 0.75rem;
  padding: ${(props) => (props.size === "md" ? "1rem" : "0.5rem")};

  text-transform: uppercase;
  width: 100%;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    transition: background-color 0.2s;
  }

  &::selection {
    background-color: ${(props) => props.theme["purple-300"]};
  }

  span {
    display: flex;
    height: 1rem;
    align-items: center;
  }
`;
