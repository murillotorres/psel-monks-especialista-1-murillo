import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { BannerSection } from "./Banner.styles";
import scroll from "../../assets/image/scroll-down.svg";

function Banner() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    api.get('pages/7?acf_format=standard')
      .then((response) => {
        setBannerData(response.data.acf);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);

  if (!bannerData) {
    return <div>Carregando...</div>;
  }

  return (
    <BannerSection>
      <div className="banner">
        <div className="container">
          <h1>{bannerData.banner_title}</h1>
          <p>{bannerData.banner_description}</p>
          {bannerData.banner_image ? (
            <img src={bannerData.banner_image} alt="Imagem do banner" className="img" />
          ) : (
            <div>Imagem não disponível</div>
          )}
          <img src={scroll} alt="Scroll" className="scroll" />
        </div>
      </div>
    </BannerSection>
  );
}

export default Banner;
