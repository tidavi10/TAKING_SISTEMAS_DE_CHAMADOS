import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #fcfcfc;
    padding: 0 24px;
    color: #000;
    -webkit-font-smoothing: antialiased;
    padding: 0 24px;
  }
  body, input, button {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    border: 0;
  }
  button {
    cursor: pointer;
  }
  textarea {
    border: none;
  }
`;