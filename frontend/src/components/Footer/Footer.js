import React, { useEffect, useState } from "react";
import api from "../../api/axios"; 
import facebook from '../../assets/image/facebook.svg';
import twitter from '../../assets/image/twitter.svg';
import instagram from '../../assets/image/instagram.svg';
import whatsapp from '../../assets/image/whatsapp.svg';
import { FooterContainer } from "./Footer.style";

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
