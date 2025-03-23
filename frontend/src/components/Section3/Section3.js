import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { Section3Wrapper } from './Section3.style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Section3() {
  const [section3Data, setSection3Data] = useState(null);

  useEffect(() => {
    api.get('pages/7?acf_format=standard')
      .then((response) => {
        setSection3Data(response.data.acf);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);

  if (!section3Data) {
    return (
      <Section3Wrapper>
        <div className="section3">
          <div className="container">
            <div className="section3-app">
              <div className="col-6">
                <Skeleton width={600} height={96} baseColor="#cdcbc6" highlightColor="#e1dcd1" style={{ marginBottom: "10px", maxWidth: "100%" }} />
                <Skeleton width="80%" height={62} baseColor="#cdcbc6" highlightColor="#e1dcd1" style={{ marginBottom: "30px" }} />
                <Skeleton width="100%" height={523} baseColor="#cdcbc6" highlightColor="#e1dcd1" />
              </div>
              <div className="col-6">
                <Skeleton width="100%" height={346} baseColor="#cdcbc6" highlightColor="#e1dcd1" style={{ marginBottom: "30px" }} />
                <Skeleton width="100%" height={356} baseColor="#cdcbc6" highlightColor="#e1dcd1" />
              </div>
            </div>
          </div>
        </div>
      </Section3Wrapper>
    );
  }

  return (
    <Section3Wrapper>
      <div className="section3">
        <div className="container">
          <div className="section3-app">
            <div className="col-6">
              <h2>{section3Data.section3_title}</h2>
              <p>{section3Data.section3_description}</p>
              <div className="img-space-full">
                <img src={section3Data.section3_image1} alt={section3Data.section3_title} />
              </div>
            </div>
            <div className="col-6">
              <div className="img-space-medium">
                <img src={section3Data.section3_image2} alt={section3Data.section3_title} />
              </div>
              <div className="img-space-medium">
                <img src={section3Data.section3_image3} alt={section3Data.section3_title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section3Wrapper>
  );
}

export default Section3;