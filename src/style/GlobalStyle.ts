import { createGlobalStyle } from "styled-components";

export const YELLOW = "#c69214";
export const BLUE = "#182b49";
export const DARK_BLUE = "#182b49";

export const GlobalStyle = createGlobalStyle`
  html{  
    --blue: ${BLUE};
    --dark-blue: ${DARK_BLUE};
    --yellow: ${YELLOW};
  }

  body {
    color: white;
    background: var(--dark-blue);
    body {
      font-family: Lato, Verdana, sans-serif;
    }
  }

  h1, h2, h3, h4, h5 {
    font-family: Cabin;
    font-weight: 700;
  }
`;
