import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { ArticlesWrapper } from './Articles.style';

function Articles() {
  const [articlesData, setArticlesData] = useState(null);

  useEffect(() => {
    api.get('pages/7?acf_format=standard')
      .then((response) => {
        setArticlesData(response.data.acf);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);

  if (!articlesData) {
    return <div>Carregando...</div>;
  }

  return (
    <ArticlesWrapper>
      <div className="articles">
        <div className="container">
          <div className="articles-app">
            {articlesData.articles.map((article, index) => (
              <a key={index} href="#" className="item">
                <h3>{article.title}</h3>
                <p>{article.text}</p>
                <span className="btn">Lorem Ipsum</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </ArticlesWrapper>
  );
}

export default Articles;
