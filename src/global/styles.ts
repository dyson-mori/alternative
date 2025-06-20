import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-montserrat), sans-serif;
  };

  body {
    height: 100vh;
    ${({ theme }) => css`
      background-color: ${theme.colors.background};
    `};
  };

  input:-webkit-autofill {
    box-shadow: 0 0 0 1000px white inset !important;
    -webkit-text-fill-color: #000 !important;
  };

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
    `};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.primary}aa;
    `};
  }
`;