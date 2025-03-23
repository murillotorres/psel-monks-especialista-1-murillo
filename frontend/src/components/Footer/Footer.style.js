import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #2D2D2D;
  padding-bottom: 30px;

  .sitename {
    text-align: center;
    display: block;
    margin: 20px 0px;
    color: #fff;
    width: 100%;
    font-size: 20px;
    font-weight: 400;
  }

  .container {
    border-top: 1px solid #fff;
  }

  .menu {
    display: flex;
    justify-content: center;
    gap: 0px 30px;
  }

  .menu a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: 300;
  }

  .social {
    display: flex;
    justify-content: center;
    gap:0 30px;
    margin:40px 0;
  }

  .social a {
    display: flex;
    width:32px;
    height:32px;
    aling-items:center;
    justify-content:center;
  }

  .social img {
    max-width: 32px;
    max-height:32px;
  }

  @media (max-width: 768px) {
    .menu {
      flex-wrap:wrap;
      gap:20px;
    }

    .menu a {
      font-size:17px;
    }
  }

  
`;
