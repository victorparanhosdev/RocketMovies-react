import styled from "styled-components";


export const HeaderOn = styled.header`
border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};


> div {

    margin: auto;
    padding: 2.4rem 0;
    height: 11.6rem;
    width: 100%;
    display: flex;
    grid-area: header;
    align-items: center;
    justify-content: space-between;

    
    > h1 {
        font-size: 2.4rem;
        font-weight:700;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }
    
    > div:has(input){
        max-width: 63rem;
        padding-inline: 2.4rem;
    
    }
    

}    

`;

export const Profile = styled.div`
display: flex;
align-items: center;


> div {
    display: flex;
    flex-direction: column;
    
    span {
        font-weight: 700;
        font-size: 1.4rem;
        align-self: flex-end;
        white-space: nowrap;
    }
    button {
        color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-align: end;
        font-size: 1.4rem;
        font-weight: 400;
        background: none;
        border: none;
  
    }
  
}

img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
    margin-left: 0.9rem;
    cursor: pointer;
}


`;

export const Container = styled.div`
display: grid;
grid-template-rows: 11.6rem auto;
grid-template-areas: "header" "content";
width: min(97%, 140rem);
margin: auto;

`;
export const Content = styled.div`

grid-area: content;


> div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
  margin: auto;
  a {
    max-width: 20.7rem;
    height: 4.8rem;
    font-size: 1.6rem;

  }

  h1 {
    font-size: 3.2rem;
    font-weight: 400;
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
  color: ${({ theme }) => theme.COLORS.ROSE};
}
`;


export const Section = styled.section`


  height: calc(100vh - 30rem);
  overflow: auto;

 
  div + div {
    margin-top: 2.4rem;
  }

  > div {
    background: ${({ theme }) => theme.COLORS.ROSEOPACITY};
    border-radius: 1.6rem;
    padding: 3.2rem;
    button {
      background: none;
      border: none;
      text-align: left;
      width: 100%;
      &:hover{
        filter: none;
      }
      h2{
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 2.4rem;
      font-weight: 700;
    }
    p {
      color: ${({ theme }) => theme.COLORS.TEXT};
  text-align: justify;
  font-size: 1.6rem;
  font-weight: 400;
  height: 4.2rem; /* Ajuste a altura desejada */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Defina o número de linhas desejado */
  -webkit-box-orient: vertical;

  
      
    }


    }

   

}

`
