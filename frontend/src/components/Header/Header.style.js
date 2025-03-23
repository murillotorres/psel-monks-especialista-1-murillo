import styled from "styled-components";

export const HeaderContainer = styled.header`
    position:absolute;
    width:100%;
    padding: 30px 0;
    z-index:3;
    left:0px;
    top:0px;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
        display:block;
        margin-right:40px;
    }

  .logo img {
    height: 24px;
    display:block;
  }

  .menu {
    display: flex;
    gap: 40px;
  }

  .menu a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight:300;
  }
    
  @media (max-width: 1100px) {
  .logo img {
    height:20px;
  }

  .menu a {
    font-size:17px;
  }
  .menu {
    gap: 20px;
  }
`;