import styled from "styled-components";

export const Container = styled.div`
header {
  background: ${({theme})=> theme.COLORS.ROSEOPACITY};
  height: 14.4rem;
  display: flex;
  align-items: center;
  > div:first-child {

  width: min(100%, 144rem);
  margin: auto;
  a {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: start;
  }

}


}




`;

export const Form = styled.form`
max-width: 34rem;
margin: auto;
top: -10rem;
position: relative;
div:has(input) {
  margin-bottom: 0.8rem;

}

div:nth-child(4){
    margin-top: 1.6rem;
  }

  
> div {
  display: flex;
  justify-content: center;

  img {
    position: relative;
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
    margin-bottom: 6.4rem;
  

  }
 



}



`;