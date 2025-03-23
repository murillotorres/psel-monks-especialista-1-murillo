import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { Section2Section } from './Section2.style';

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
    return <div>Carregando...</div>;
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
