import styled from 'styled-components';

export const StyledHeading = styled.h1<{ isNightMode?: boolean }>`
  font-size: 2rem;
  color: ${(props)=>props.theme.colors.white}; 
  margin-bottom: 20px;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  margin-top: 5%;
  margin-bottom: 2rem;

  ${({ isNightMode }) => (isNightMode ? 'color: #f0f0f0;' : 'color: #0d0d0d;')}
`;
