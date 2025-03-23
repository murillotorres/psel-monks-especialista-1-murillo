import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import appStoreImg from '../../assets/image/download-app-store.png';
import googlePlayImg from '../../assets/image/download-google-play.png';
import { AppDownloadWrapper } from './AppDownload.styles';

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
