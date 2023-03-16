import styled from "styled-components";

export const Container = styled.div`
display: grid;
grid-template-rows: 11.6rem auto;
grid-template-areas: "header" "content";

`;
export const Content = styled.div`
max-width: 140rem;
grid-area: content;
margin: auto;

> div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
  margin: auto;
  button {
    max-width: 20.7rem;
    height: 4.8rem;
    font-size: 1.6rem;

  }

  h1 {
    font-size: 3.2rem;
    font-weight: 400;
  }

}

> section {
  height: 50rem;
  overflow: auto;

  div + div {
    margin-top: 2.4rem;
  }

  > div {
    background: ${({theme})=> theme.COLORS.ROSEOPACITY};
    border-radius: 1.6rem;
    padding: 3.2rem;

    h2{
      font-size: 2.4rem;
      font-weight: 700;
    }
    p {
      color: ${({theme})=> theme.COLORS.TEXT};
      text-align: justify;
      font-size: 1.6rem;
      font-weight: 400;
      height: 6rem;
      overflow: auto;
    }

  }
}

`;

export const Tags = styled.div`
display: flex;
flex-wrap: wrap;
gap: 0.8rem;
margin-top: 1.5rem;
`;


export const Icons = styled.div`
margin: 0.8rem 0 1.5rem;
display: flex;
gap: 0.6rem;
svg {
  color: ${({theme})=> theme.COLORS.ROSE};
}
`;