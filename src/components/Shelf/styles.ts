import styled from "styled-components";

export const ShelfContainer = styled.section`
  h2 {
    font-size: ${(props) => props.theme["base-subtitle"]};
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.5rem;
    margin-bottom: 2.125rem;    
  }  
`

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  
  row-gap: 2.5rem;
  column-gap: 2rem;
  padding-bottom: 9.8125rem;
`