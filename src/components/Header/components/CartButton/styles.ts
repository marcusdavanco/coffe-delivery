import styled from 'styled-components';

export const ButtonContainer = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${(props) => props.theme['yellow-300']};
   border-radius: 6px;    
   padding: 0.5rem;
   border: none;
   box-shadow: none;
   max-width: 40px;
   max-height: 40px;
   position: relative;

   .badge {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: ${(props) => props.theme['yellow-700']};
      color: #fff;
      font-weight: 700;
      top: -10px;
      right: -10px;      
      position: absolute;
      font-size: 12px;      
   }
`
