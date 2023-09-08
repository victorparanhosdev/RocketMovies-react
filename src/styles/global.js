import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  font-size: 62.5%;
}

body {
  background-color: ${({theme})=> theme.COLORS.BACKGROUND_100};
  color: ${({theme})=> theme.COLORS.WHITE};
  font-size: 1.6rem;
}
body * {
  font-family: 'Roboto Slab', serif;
  font-size: 1.6rem;
  
}

a, button{
  transition-property: filter;
  transition: linear 0.3s;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme})=> theme.COLORS.WHITE}
}
a:hover, button:hover {
  filter: brightness(0.9);

}


::-webkit-scrollbar {
  background-color:transparent;
  width: 0.8rem;
  height: 0.8rem;
}
::-webkit-scrollbar-thumb {
  border-radius: 0.8rem;
  width: 0.8rem;
  height: 0.8rem;
  background: ${({theme})=> theme.COLORS.ROSE};
 
}



`;

