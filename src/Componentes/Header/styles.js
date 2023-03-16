import styled from "styled-components";




export const Container = styled.header`
border-bottom: 1px solid ${({theme})=> theme.COLORS.BORDER};

> div {
    max-width: 140rem;
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
        color: ${({theme})=> theme.COLORS.ROSE};
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
    a {
        color: ${({theme})=> theme.COLORS.GRAY_200};
        align-self: flex-end;
        font-size: 1.4rem;
        font-weight: 400;
    }
  
}

img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${({theme})=> theme.COLORS.BORDER};
    margin-left: 0.9rem;
    cursor: pointer;
}


`;