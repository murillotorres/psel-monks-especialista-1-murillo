import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import styled from 'styled-components';

const BannerSection = styled.section`
  .banner {
    background-color: #2D2D2D;
    padding-top: 100px;
    padding-bottom:150px;
    overflow:hidden;
    border-radius:0px 0px 30px 30px;
    display:block;
  }

  h1 {
    font-size: 48px;
    color: #EAE8E4;
    margin-bottom: 20px;
    max-width:700px;
  }

  p {
    font-size: 24px;
    color: #EAE8E4;
    line-height: 1.6;
    max-width:600px;
    font-weight:300;
  }

  .img {
    width: 100%;
    max-width: 600px;
    height: auto;
    display: block;
    position:absolute;
    top:-100px;
    right:0px;
  }
`;

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
        </div>
      </div>
    </BannerSection>
  );
}

export default Banner;
