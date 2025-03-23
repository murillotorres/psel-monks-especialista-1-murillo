import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { TagSectionWrapper } from './TagSection.style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
    return (
      <TagSectionWrapper>
      <div className="tagsection">
        <div className="container">
          <Skeleton width={600} height={48} baseColor="#cdcbc6" highlightColor="#e1dcd1" style={{ marginBottom: "30px" }} />
          <Skeleton width="100%" height={172} baseColor="#cdcbc6" highlightColor="#e1dcd1" />
        </div>
      </div>
    </TagSectionWrapper>
    )
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
