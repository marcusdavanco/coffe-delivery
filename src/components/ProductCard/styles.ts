import styled from "styled-components";

export const ProductCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  width: 16rem;
  height: 19.375rem;
  border-radius: 6px 36px;

  background-color: ${(props) => props.theme['base-card']};
  padding: 7rem 1.25rem 1.25rem;

  img {
    height: 7.5rem;
    width: 7.5rem;
    position: absolute;
    top: -20px;
  }

  img + div {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 1rem;

    span {
      color: ${(props) => props.theme['yellow-500']};
      background-color: ${(props) => props.theme['yellow-300']};
      text-transform: uppercase;      
      padding: 4px 8px;
      font-size: ${(props) => props.theme['text-1']};
      font-weight: 700;
      border-radius: 100px;
    }    
  }

  .title {
      font-family: 'Baloo 2';
      font-weight: 700;
      font-size: ${(props) => props.theme['text-6']};
      font-size: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 1rem;
    }

  .description {
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: ${(props) => props.theme['text-3']};
    color: ${(props) => props.theme['base-label']};
    min-height: 2rem;
  }

  .addToCart {
    display: flex;
    gap: 0.5rem;
  }

  .price {
    align-items: center;
    display: flex;
    margin-right: 1rem;

    .symbol {
      font-size: ${(props) => props.theme['text-3']};
      line-height: 18px;
      margin-right: 0.25rem;
    }

    .value {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: ${(props) => props.theme['text-7']};
      line-height: 32px;
    }
  }
`