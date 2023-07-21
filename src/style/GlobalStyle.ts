import { createGlobalStyle } from "styled-components";

export const YELLOW = "#c69214";
export const BLUE = "#264573";
export const DARK_BLUE = "#182b49";
export const GREY = "#bfcbd9";
export const DARK_GREY = "#2f3947";

export const GlobalStyle = createGlobalStyle`
  html{  
    --blue: ${BLUE};
    --dark-blue: ${DARK_BLUE};
    --yellow: ${YELLOW};
    --grey: ${GREY};
    --dark-grey: ${DARK_GREY};
    font-size: min(max(2vw, 14px), 22px);
  }

  body {
    color: white;
    background: var(--dark-blue);
    font-family: Lato, Verdana, sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font-family: Cabin;
    font-weight: 700;
    margin: 0;
  }
`;
