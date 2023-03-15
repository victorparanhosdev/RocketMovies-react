import styled from "styled-components";

export const Container = styled.button`
border: none;
background: ${({theme})=> theme.COLORS.ROSE};
width: 100%;
height: 5.6rem;
color: ${({theme})=> theme.COLORS.GRAY_300};
font-weight: 500;
border-radius: 1rem;

`;