import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;    
    margin: 0;
    padding: 0;
  }
  html{
      font-size: 62.5%;
      box-sizing: border-box;
  }

  body {
    font-family: 'Jost', sans-serif;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition:.3s all;
  }`;
