import styled from "styled-components";

export const ProductRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  img {
    height: 4rem;
    width: 4rem;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  & > span {
    font-weight: 700;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-right: auto;
    margin-left: 20px;
  }

  div > div {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    height: 2rem;
  }
`;
