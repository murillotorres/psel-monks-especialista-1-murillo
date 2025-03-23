import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { HeaderContainer } from "./Header.style";

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
