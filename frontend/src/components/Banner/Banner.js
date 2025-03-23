import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { BannerSection } from "./Banner.styles";
import scroll from "../../assets/image/scroll-down.svg";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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

  return (
    <BannerSection>
      <div className="banner">
        <div className="container">
          <h1>
            {bannerData ? bannerData.banner_title : <Skeleton width={600} height={102} baseColor="#454545" highlightColor="#676767" />}
          </h1>
          <p>
            {bannerData ? bannerData.banner_description : <Skeleton width={200} height={110} baseColor="#454545" highlightColor="#676767"  />}
          </p>
          {bannerData?.banner_image && ( <img src={bannerData.banner_image} alt="Imagem do banner" className="img" /> )}
          <img src={scroll} alt="Scroll" className="scroll" />
        </div>
      </div>
    </BannerSection>
  );
}

export default Banner;
