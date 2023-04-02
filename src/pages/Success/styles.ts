import styled from "styled-components";

export const SuccessContainer = styled.main`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  align-items: flex-end;

  img {
    height: 293px;
    width: 492px;
  }

  .title {
    h2 {
      font-family: "Baloo 2";
      font-weight: 800;
      font-size: ${(props) => props.theme["text-8"]};
      color: ${(props) => props.theme["yellow-700"]};
    }

    span {
      font-size: ${(props) => props.theme["text-6"]};
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .card {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2.5rem;
      border-radius: 6px 36px;
      width: 32rem;
      position: relative;
      border: 1px solid ${(props) => props.theme["yellow-500"]};

      & > div {
        display: flex;
      }

      span {
        font-weight: 700;
      }
    }
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    margin-right: 0.75rem;
  }

  .purple {
    background-color: ${(props) => props.theme["purple-500"]};
  }

  .yellow {
    background-color: ${(props) => props.theme["yellow-500"]};
  }

  .yellow.dark {
    background-color: ${(props) => props.theme["yellow-700"]};
  }
`;
