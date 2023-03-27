import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 70rem;
  height: calc(100vh - 11.8125rem);
  margin: 2rem auto 9.8125rem;  

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`