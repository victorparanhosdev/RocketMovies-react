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
  transition-property: filter;
  transition: linear 0.3s;
  cursor: pointer;
  text-decoration: none;
}
a:hover, button:hover {
  filter: brightness(0.9);

}


`;

