import React, { useEffect, useState } from "react";
import api from "../api/axios";
import styled from "styled-components";

const HeaderContainer = styled.header`
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
`;

function Header() {
  const [logo, setLogo] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    api.get("/site-config")
      .then(response => {
        setLogo(response.data.logotipo);
      })
      .catch(error => console.error("Erro ao buscar site-config:", error));
  }, []);

  useEffect(() => {
    api.get("/header-menu")
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => console.error("Erro ao buscar menu do cabeçalho:", error));
  }, []);

  return (
    <HeaderContainer>
      <div className="container">
        <a href="/" className="logo">
          {logo && <img src={logo} alt="Logotipo" />}
        </a>
        <nav>
          <div className="menu">
            {menuItems.map((item, index) => (
              <a key={index} href={item.url}>{item.title}</a>
            ))}
          </div>
        </nav>
      </div>
    </HeaderContainer>
  );
}

export default Header;
