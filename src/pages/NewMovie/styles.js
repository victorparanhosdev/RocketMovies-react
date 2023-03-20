import styled from "styled-components";

export const Container = styled.div`


`;

export const Content = styled.div`

max-width: 140rem;
margin: 4rem auto 0;

main {
  height: calc(100vh - 20rem);
  overflow-y: auto;
  
  textarea {
    background: ${({theme})=> theme.COLORS.BACKGROUND_200};
    padding: 1.9rem 1.6rem;
    border-radius: 1rem;
    margin: 4rem auto;
    border: none;
    width: 100%;
    font-size: 1.6rem;
    color: ${({theme})=> theme.COLORS.WHITE};
    border: 2px solid transparent;
    transition: border 0.3s;
    outline: none;
    resize: none;

    &:focus{
      border: 2px solid ${({theme})=> theme.COLORS.ROSE};

    }

    &::placeholder{
      font-family: "Roboto";
      font-size: 1.6rem;
      color: ${({theme})=> theme.COLORS.GRAY_200};
      font-weight: 400;
    }

  }
  > h1 {
    font-size: 3.6rem;
    font-weight: 500;
    font-family: "Roboto Slab";
    margin: 2.4rem auto 4rem;
  }

  > div:has(input) {
    display: flex;
    gap: 4rem;
    
  }

  > div:has(span) {

    background-color: #0D0C0F;
    
  }

}


> a {
  justify-content: start;
}

div:has(a){
  display: flex;
  gap: 4rem;
  margin: 4rem auto;
 a:first-child {
  background-color: #0D0C0F;
  color: #FF859B;
 }
}



`;
