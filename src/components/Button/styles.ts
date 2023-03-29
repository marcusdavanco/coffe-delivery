import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: ${(props) => props.theme["base-button"]};
  cursor: pointer;
  display: flex;
  text-align: center;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme["base-text"]};
  font-size: ${(props) => props.theme["text-2"]};
  gap: 0.75rem;
  padding: 1rem;
  text-transform: uppercase;
  width: 100%;
  white-space: nowrap;

  span {
    display: flex;
    height: 1rem;
    align-items: center;
  }
`;
