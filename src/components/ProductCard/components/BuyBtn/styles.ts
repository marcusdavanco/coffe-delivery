import styled from "styled-components";

export const BuyBtnContainer = styled.button`
  align-items: center;
  border: none;
  cursor: pointer;
  display: flex;  
  height: 2.375rem;
  justify-content: center;
  width: 2.375rem;
  border-radius: 6px;


  background-color: ${(props) => props.theme["purple-700"]}
  
`