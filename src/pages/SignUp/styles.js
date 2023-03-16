import styled from "styled-components";
import backgroundpng from '../../assets/background.png'

export const Container = styled.div`
  display: flex;
  align-items: center;

  > div {
    width: 64rem;
  }


`;

export const Background = styled.div`

flex: 1;
height: 100vh;
width: 100%;
background: url(${backgroundpng}) no-repeat center center;
background-size: cover;


`;

export const Form = styled.form`
max-width: 34rem;
margin: auto;


> h1 {
  color: ${({theme})=> theme.COLORS.ROSE};
  font-size: 4.8rem;

}
> p {
  font-size: 1.4rem;
  margin-bottom: 4.8rem;
}
> h2 {
  font-weight: 500;
  font-size: 2.4rem;
  margin-bottom: 4.8rem;
}
div + div {
  margin-top: 0.8rem;
}
>button {
  margin: 2.4rem auto 4.2rem;
}
div:last-child {
  display: flex;
  justify-content: center;
  align-items: center;

   svg {
    color: ${({theme})=> theme.COLORS.ROSE};
    margin-right:0.8rem;
    }
}



`;