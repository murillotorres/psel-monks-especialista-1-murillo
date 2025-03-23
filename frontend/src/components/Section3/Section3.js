import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { Section3Wrapper } from './Section3.style';

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
    return <div>Carregando...</div>;
  }

  return (
    <Section3Wrapper>
      <div className="section3">
        <div className="container">
          <div className="section3-app">
            <div className="col-6">
              <h2>{section3Data.section3_title}</h2>
              <p>{section3Data.section3_description}</p>
              <div className="img-space-full"><img src={section3Data.section3_image1} alt={section3Data.section3_title} /></div>
            </div>
            <div className="col-6">
              <div className="img-space-medium"><img src={section3Data.section3_image2} alt={section3Data.section3_title} /></div>
              <div className="img-space-medium"><img src={section3Data.section3_image3} alt={section3Data.section3_title} /></div>
            </div>
          </div>
        </div>
      </div>
    </Section3Wrapper>
  );
}

export default Section3;
