import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { Section2Section } from './Section2.style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Section2() {
  const [section2Data, setSection2Data] = useState(null);

  useEffect(() => {
    api.get('pages/7?acf_format=standard')
      .then((response) => {
        setSection2Data(response.data.acf);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);

  if (!section2Data) {
    return (
      <Section2Section>
        <div className="section2">
          <div className="container">
            <Skeleton width={600} height={48} baseColor="#cdcbc6" highlightColor="#e1dcd1" style={{ marginBottom: "10px" }} />
            <Skeleton width={400} height={27} baseColor="#cdcbc6" highlightColor="#e1dcd1" />
            <div className="section2-app">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="section2-app-item">
                  <Skeleton width="100%" height={195} style={{ marginBottom: "10px" }}  />
                  <Skeleton width="70%" height={27} style={{ marginBottom: "5px" }}  />
                  <Skeleton width="50%" height={70}  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section2Section>
    );
  }

  return (
    <Section2Section>
      <div className="section2">
        <div className="container">
          <h2>{section2Data.section2_title}</h2>
          <p>{section2Data.section2_description}</p>
          <div className="section2-app">
            {section2Data.section2_itens.map((item, index) => (
              <div key={index} className="section2-app-item">
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section2Section>
  );
}

export default Section2;