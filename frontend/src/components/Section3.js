import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import styled from 'styled-components';

const Section3Wrapper = styled.section`
  .section3 {
    padding-bottom:60px;
  }
  .section3-app {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin:0px -15px;
  }

  .col-6 {
    width: 50%;
    padding:15px;
    box-sizing:border-box;
  }

  h2 {
    font-size:40px;
    font-weight:500;
    color:#2D2D2D;
    margin-bottom:10px;
    line-height:1.2;
  }

  p {
    color:#2D2D2D;
    font-size:24px;
    font-weight:300;
    line-height:1.3;
    margin-bottom:30px;
  }

  img {
    width: 100%;
    display: block;
  }

  
  .img-space-full {
    height:523px;
    overflow:hidden;
    display:flex;
    border-radius: 30px;
    align-items: center;
    margin-bottom: 30px;
    box-shadow: 0px 5px 10px 0px #0000004a;
  }

  .img-space-medium {
    height:346px;
    overflow:hidden;
    display:flex;
    border-radius: 30px;
    align-items: center;
    margin-bottom: 30px;
    box-shadow: 0px 5px 10px 0px #0000004a;
  }

  @media (max-width: 768px) {
    .section3-app {
      flex-direction: column;
    }

    .col-6 {
      width: 100%;
    }
  }
`;

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
