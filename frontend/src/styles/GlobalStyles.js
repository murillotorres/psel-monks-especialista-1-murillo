import { createGlobalStyle } from "styled-components";
import '../assets/fonts/font.css';

const GlobalStyles = createGlobalStyle`
* {
	margin:0;
	padding:0;
	box-sizing:border-box
}

body {
	background-color:#eae8e4;
	font-family:'Helvetica Neue',sans-serif
}

.container {
	width:100%;
	padding:0 60px;
	max-width:1400px;
	margin:0 auto;
	position:relative
}

h2 {
  font-size: 40px;
  color: #2D2D2D;
  font-weight:500;
  margin-bottom: 10px;
  line-height:1.2;
}

@media (max-width: 768px) {
	.container {
		padding:0 30px
	}
}


`;

export default GlobalStyles;
