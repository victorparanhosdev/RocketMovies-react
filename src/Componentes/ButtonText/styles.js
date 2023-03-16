import styled from "styled-components";


export const Container = styled.a`

  color: ${({theme})=> theme.COLORS.ROSE};
  font-weight: 400;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    margin-right: 0.8rem;
  }
`;