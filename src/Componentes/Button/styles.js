import styled from "styled-components";
import { Link } from 'react-router-dom'
export const Container = styled(Link)`

background: ${({theme})=> theme.COLORS.ROSE};
width: 100%;
height: 5.6rem;
color: ${({theme})=> theme.COLORS.GRAY_300};
font-weight: 700;
border-radius: 1rem;
display: flex;
align-items: center;
justify-content: center;
> svg {
  margin-right: 0.8rem;
}

`;