import { createGlobalStyle } from "styled-components";
import { fonts, robotoRegular } from "./fonts";
import {
  black,
  background,
} from "./colors";

export const GlobalStyle = createGlobalStyle`
  ${fonts}

  * {
    margin: 0;
    box-sizing: border-box;
  }

  html {margin-right: calc(-1 * (100vw - 100%));}

  body {
    font-family: ${robotoRegular};
    // color: ${black};
    overflow-x: hidden;
    // background-color: ${background};
    padding-right: 0 !important;
  }

  .fade-enter, .fade-exit-active {
    opacity: 0;
  }
  .fade-exit, .fade-enter-active  {
    opacity: 1;
  }
  .fade-enter-active, .fade-exit-active {
    transition: all .25s ease-in;
  }

  .fadeIn-enter {
    opacity: 0;
  }

  .fadeIn-enter-active {
    opacity: 1;
    transition: all .25s ease-in;
  }

  .fadeIn-exit  {
    opacity: 0;
  }
 `;
