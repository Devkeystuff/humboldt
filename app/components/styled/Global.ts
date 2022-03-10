import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: black;
    position: relative;
    z-index: -1;
    overflow: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  main::-webkit-scrollbar {
    display: none;
  }
  main {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  @media screen and (max-width: 1024px) {
    html {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 628) {
    html {
      font-size: 10px;
    }
  }
`;

export default GlobalStyles;
