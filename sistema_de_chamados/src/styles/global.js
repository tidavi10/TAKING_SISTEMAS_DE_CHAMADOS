import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #f8f9fa;
    color: #000;
    -webkit-font-smoothing: antialiased;
    
  }
  body, input, button {
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    border: 0;
  }
  button {
    cursor: pointer;
  }
  textarea {
    border: none;
  }
  p {
    margin-bottom: 0;
  }
`;