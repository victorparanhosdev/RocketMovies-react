import styled from "styled-components";


export const Container = styled.div`
height: 5.6rem;
width: 100%;
padding: 1.6rem;
display: flex;
align-items: center;
background: ${({theme})=> theme.COLORS.BACKGROUND_200};
outline: 2px solid transparent;
transition: outline 0.3s;
border-radius: 1rem;

&:focus-within{
    outline: 2px solid ${({theme})=> theme.COLORS.ROSE};
  }

> input {
  font-size: 1.6rem;
  outline: none;
  border: none;
  background: transparent;

  height: 100%;
  width: 100%;
  margin-left: 1.6rem;
  color: ${({theme})=> theme.COLORS.WHITE};

  &::placeholder{
    color: ${({theme})=> theme.COLORS.GRAY_200}
  }
 
}
svg {
  color: ${({theme})=> theme.COLORS.GRAY_200};
}

`;

