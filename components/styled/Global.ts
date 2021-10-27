import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: black;
    position: relative;
    z-index: -1;
    overflow: auto;

    &::before{
      content: "";
      position: absolute;
      background: url("/images/BlueRadiant.png");
      left: -40%;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.7;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
      pointer-events: none;
      z-index: -1;

    }
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
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

`;

export default GlobalStyles;
