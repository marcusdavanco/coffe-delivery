import styled from 'styled-components';

export const BannerContainer = styled.section`
  display: flex;
  gap: 3.5rem;
  margin-top: 5.875rem;
  margin-bottom: 6.75rem;

  p {
    font-family: 'Baloo 2';
    font-size: 3rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-title']};
    font-weight: 800;
    line-height: 1.3;
  }

  p + span {
    font-family: 'Roboto';
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    
  }

  & > div > div {
    margin-top: 66px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 1.25rem;
  }

  & > div > div > div {    
    display: flex;
    gap: 0.75rem;
    align-items: center;
    white-space: nowrap;
  }

  .icon-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    
  }

  .orange {
    background-color: ${(props) => props.theme['yellow-700']}
  }

  .yellow {
    background-color: ${(props) => props.theme['yellow-500']}
  }

  .gray {
    background-color: ${(props) => props.theme['base-text']}
  }

  .purple {
    background-color: ${(props) => props.theme['purple-500']}
  }

`