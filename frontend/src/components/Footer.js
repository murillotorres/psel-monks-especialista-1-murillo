import React, { useEffect, useState } from "react";
import api from "../api/axios"; 
import styled from "styled-components";

const FooterContainer = styled.footer`
  background:#2D2D2D;
  padding-bottom:30px;
  paddin-top:20px;

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
    font-weight:300;
  }
`;

function Footer() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    api.get("/footer-menu")
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar menu do rodapé:", error);
      });
  }, []);

  return (
    <FooterContainer>
      <div className="container">
        <div className="sitename">Hello World!</div>
        <div className="menu">
          {menuItems.map((item, index) => (
            <a key={index} href={item.url}>{item.title}</a>
          ))}
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
