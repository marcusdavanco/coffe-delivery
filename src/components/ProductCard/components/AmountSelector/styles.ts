import styled from "styled-components";

export const AmountSelectorContainer = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  position: relative;
  border-radius: 6px;
  display: flex;
  max-width: 4.5rem;

  input {
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    height: 2.375rem;
    

    text-align: center;
    width: 100%;    

    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }        
  } 

  button {
    position: absolute;
    background: transparent;
    border: none;
    cursor: pointer;

    &.minus {
      left: 0.5rem;
      top: 0.75rem;
    }

    &.plus {
      right: 0.5rem;
      top: 0.75rem;
    } 
  }  
`