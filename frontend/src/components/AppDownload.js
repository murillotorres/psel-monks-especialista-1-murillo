import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import styled from 'styled-components';
import appStoreImg from '../assets/image/download-app-store.png';
import googlePlayImg from '../assets/image/download-google-play.png';

const AppDownloadWrapper = styled.section`
  .app_download {
    margin-bottom:60px;
  }

  .content {
    display: flex;
    align-items: center;
    background:#3C0C60;
    padding:40px 30px; 
    border-radius:30px;
    color:#fff;
  }

  .text {
    margin-bottom: 20px;
    width:calc(100% - 217px;)
    padding-right:50px;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 10px;
    font-weight:500;
  }

  p {
    font-size: 24px;
    font-weight:300;
    line-height: 1.5;
  }

  .links {
    width:217px;
  }

    .links a {
        display:block;
        margin-bottom:5px;
    }

  .links img {
    width: 100%;
    height: auto;
  }
`;

function AppDownload() {
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    api.get('pages/7?acf_format=standard')
      .then((response) => {
        setAppData(response.data.acf);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);

  if (!appData) {
    return <div>Carregando...</div>;
  }

  return (
    <AppDownloadWrapper>
      <div className="app_download">
        <div className="container">
          <div className="content">
            <div className="text">
              <h2>{appData.app_download_title}</h2>
              <p>{appData.app_download_description}</p>
            </div>
            <div className="links">
              <a href={appData.app_download_app_store} target="_blank" rel="noopener noreferrer">
                <img src={appStoreImg} alt="Download na App Store" />
              </a>
              <a href={appData.app_download_google_play} target="_blank" rel="noopener noreferrer">
                <img src={googlePlayImg} alt="Download no Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AppDownloadWrapper>
  );
}

export default AppDownload;
