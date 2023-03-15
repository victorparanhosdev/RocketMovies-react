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
}

a, button{
  transition: filter 0.4s;
}
a:hover, button:hover {
  filter: brightness(0.9);
}


`;

