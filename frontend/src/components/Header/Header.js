import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { HeaderContainer } from "./Header.style";
import menuMobile from "../../assets/image/menu-mobile.svg";
import scrollBack from "../../assets/image/scroll-back.svg";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <div className="container">
        <div className={`content ${isMenuOpen ? "content-active" : ""}`}>
          <a href="/" className="logo">
            {logo ? (
              <img src={logo} alt="Logotipo" />
            ) : (
              <Skeleton width={140} height={24} baseColor="#454545" highlightColor="#676767" /> 
            )}
          </a>
          <div className="menu-mobile" onClick={toggleMenu}>
            <img src={menuMobile} alt="Menu Mobile" />
          </div>
        </div>
        <nav>
          <div className={`menu ${isMenuOpen ? "active-menu" : ""}`}>
            {menuItems.length === 0 ? (
              <>
                <Skeleton width={100} height={22} baseColor="#454545" highlightColor="#676767" />
                <Skeleton width={100} height={22} baseColor="#454545" highlightColor="#676767" />
                <Skeleton width={100} height={22} baseColor="#454545" highlightColor="#676767" />
                <Skeleton width={100} height={22} baseColor="#454545" highlightColor="#676767" />
              </>
            ) : (
              menuItems.map((item, index) => (
                <a key={index} href={item.url}>{item.title}</a>
              ))
            )}
            <img src={scrollBack} alt="Scroll Back" className="scrollback" onClick={closeMenu} />
          </div>
        </nav>
      </div>
    </HeaderContainer>
  );
}

export default Header;