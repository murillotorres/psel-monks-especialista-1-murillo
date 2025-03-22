import React, { useEffect, useState } from "react";
import api from "../api/axios"; 
import styled from "styled-components";
import facebook from '../assets/image/facebook.svg';
import twitter from '../assets/image/twitter.svg';
import instagram from '../assets/image/instagram.svg';
import whatsapp from '../assets/image/whatsapp.svg';

const FooterContainer = styled.footer`
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
`;

function Footer() {
  const [menuItems, setMenuItems] = useState([]);
  const [socialLinks, setSocialLinks] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    whatsapp: ""
  });

  useEffect(() => {
    // Menu
    api.get("/footer-menu")
      .then(response => {
        setMenuItems(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar menu do rodapé:", error);
      });

    // Redes sociais
    api.get("/site-config")
      .then(response => {
        setSocialLinks({
          instagram: response.data.instagram || "",
          facebook: response.data.facebook || "",
          twitter: response.data.twitter || "",
          whatsapp: response.data.whatsapp || ""
        });
      })
      .catch(error => {
        console.error("Erro ao buscar configurações do site:", error);
      });
  }, []);


  const socialMedia = [
    { name: 'instagram', icon: instagram },
    { name: 'facebook', icon: facebook },
    { name: 'twitter', icon: twitter },
    { name: 'whatsapp', icon: whatsapp },
  ];

  return (
    <FooterContainer>
      <div className="container">
        
        <div className="social">
          {socialMedia.map((social) =>
            socialLinks[social.name] ? (
              <a key={social.name} href={socialLinks[social.name]} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.name} />
              </a>
            ) : null
          )}
        </div>

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
