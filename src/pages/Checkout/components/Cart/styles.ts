import styled from "styled-components";

export const CartContainer = styled.section`
  .cart {
    border-radius: 6px 44px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 28rem;

    button[type="submit"] {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      width: 100%;
      padding: 12px 0;
      background: ${(props) => props.theme["yellow-500"]};
      color: ${(props) => props.theme["white"]};
      border-radius: 6px;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme["yellow-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;
