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

  .menu-mobile {
    display:none;
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


  @media (max-width: 820px) {
    .container {
      display:block;
    }
      
    .menu {
      margin-top:20px;
    }
  }

  @media (max-width: 768px) {
    position:absolute;
    width:100%;
    top:0px;
    left:0px; 
    z-index:10;
    padding:0px;

    .content {  
      background:transparent;
      transition:0.5s;
      border-radius:0px 0px 30px 30px;
      position:relative;
      z-index:11;
      display:flex;
      align-items:center;
    }

    .content-active {
      background:#2D2D2D;
    }

    .container {
      padding:0px;
    }

    .logo {
      margin-left:30px;
      margin-right:0px;
    }

    .menu-mobile {
      display:block;
      padding:25px;
    }

    .menu {
      position: absolute;
      top: -700%;
      left: 0px;
      width: 100%;
      z-index: 9;
      background: #DFBBFE;
      display: block;
      padding-top: 53px;
      padding-bottom: 15px;
      transition:0.5s;
    }

    .active-menu {
      top:-1px;
      border-bottom: 100vh solid #2d2d2d99;
    }

    .menu a {
      display:block;
      width:100%;
      color:#2D2D2D;
      font-size:20px;
      padding:15px 30px;
      font-weight:500;
    }
  }

`;