import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: flex;
  justify-content: space-between;

  .left-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .title {
    font-size: "Baloo 2";
    font-weight: 700;
    font-size: ${(props) => props.theme["text-5"]};
    line-height: 1.5rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    p {
      color: ${(props) => props.theme["base-subtitle"]};
    }

    span {
      color: ${(props) => props.theme["base-text"]};
    }
  }

  .card {
    background-color: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
    border-radius: 6px;

    & + .card {
      margin-top: 1.5rem;
    }
  }
`;
