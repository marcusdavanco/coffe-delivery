import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;
  
  & > div {
    display: flex;
    gap: 12px;
    
    div {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background-color: ${(props) => props.theme['purple-300']};
      color: ${(props) => props.theme['purple-700']};
      border-radius: 6px;
    }
    
  }
`