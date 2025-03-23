import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { TagSectionWrapper } from './TagSection.style';

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
