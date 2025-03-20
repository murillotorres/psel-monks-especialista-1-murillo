import { createGlobalStyle } from "styled-components";
import '../assets/fonts/font.css';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    background-color: #eae8e4;
    font-family: 'Helvetica Neue', sans-serif; 
  }

.container {
    width: 100%;
    padding: 0px 60px;
    max-width:1400px;
    margin: 0 auto;
    position:relative;
  }
`;

export default GlobalStyles;
