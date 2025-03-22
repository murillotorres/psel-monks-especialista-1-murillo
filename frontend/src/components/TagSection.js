import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import styled from 'styled-components';

const TagSectionWrapper = styled.section`
  .tagsection {
    margin-bottom:60px;
  }

  h2 {
    font-size: 40px;
    color: #2D2D2D;
    margin-bottom: 30px;
    font-weight:500;
  }
  
  .tagsection-app {
    display: flex;
    flex-wrap: wrap;
    margin:auto;
    max-width:90%;
    justify-content: center;
    gap: 20px;
  }

  .tagsection-app div {
    background-color: #DFDCD5;
    color: #7D26C9;
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 20px;
    font-weight: 600;
    border: 1px solid #7D26C9;
  }
`;

function TagSection() {
  const [tagsData, setTagsData] = useState(null);

  useEffect(() => {
    api.get('pages/7?acf_format=standard')
      .then((response) => {
        setTagsData(response.data.acf);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);

  if (!tagsData) {
    return <div>Carregando...</div>;
  }

  return (
    <TagSectionWrapper>
      <div className="tagsection">
        <div className="container">
          <h2>{tagsData.tags_title}</h2>
          <div className="tagsection-app">
            {tagsData.tags_itens.map((tag, index) => (
              <div key={index}>{tag.name}</div>
            ))}
          </div>
        </div>
      </div>
    </TagSectionWrapper>
  );
}

export default TagSection;
