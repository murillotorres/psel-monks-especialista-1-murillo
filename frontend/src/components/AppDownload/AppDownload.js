import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import appStoreImg from '../../assets/image/download-app-store.png';
import googlePlayImg from '../../assets/image/download-google-play.png';
import { AppDownloadWrapper } from './AppDownload.styles';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
    return (
      <AppDownloadWrapper>
        <div className="app_download">
          <div className="container">
            <div className="content">
              <div className="text">
                <Skeleton width={600} height={48} baseColor="#510b85" highlightColor="#6c14ad" style={{ marginBottom: "10px" }} />
                <Skeleton width={300} height={72} baseColor="#510b85" highlightColor="#6c14ad" />
              </div>
              <div className="links">
                <Skeleton width="100%" height={64} baseColor="#510b85" highlightColor="#6c14ad" style={{ marginBottom: "10px" }} />
                <Skeleton width="100%" height={64} baseColor="#510b85" highlightColor="#6c14ad" />
              </div>
            </div>
          </div>
        </div>
      </AppDownloadWrapper>
    )
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
                <img src={googlePlayImg} alt="Download no Google Play" style={{ borderRadius: "10px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AppDownloadWrapper>
  );
}

export default AppDownload;
