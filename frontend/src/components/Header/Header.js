import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { HeaderContainer } from "./Header.style";
import menuMobile from "../../assets/image/menu-mobile.svg";

function Header() {
  const [logo, setLogo] = useState("");
  const [menuItems, setMenuItems] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <div className="container">
        {/* Adicionando a classe .content-active dentro da div .content */}
        <div className={`content ${isMenuOpen ? "content-active" : ""}`}>
          <a href="/" className="logo">
            {logo && <img src={logo} alt="Logotipo" />}
          </a>
          <div className="menu-mobile" onClick={toggleMenu}>
            <img src={menuMobile} alt="Menu Mobile" />
          </div>
        </div>
        <nav>
          {/* Adicionando a classe .active-menu na div .menu */}
          <div className={`menu ${isMenuOpen ? "active-menu" : ""}`}>
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
