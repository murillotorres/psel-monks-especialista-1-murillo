import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { ArticlesWrapper } from './Articles.style';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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
    return (
      <ArticlesWrapper>
      <div className="articles">
        <div className="container">
          <div className="articles-app">
            <div className="item">
              <Skeleton width="100%" height={27} style={{ marginBottom: "15px" }}  />
              <Skeleton width="75%" height={120} style={{ marginBottom: "20px" }}  />
              <Skeleton width="50%" height={43}  />
            </div>
            <div className="item">
              <Skeleton width="100%" height={27} style={{ marginBottom: "15px" }}  />
              <Skeleton width="75%" height={120} style={{ marginBottom: "20px" }}  />
              <Skeleton width="50%" height={43}  />
            </div>
            <div className="item">
              <Skeleton width="100%" height={27} style={{ marginBottom: "15px" }}  />
              <Skeleton width="75%" height={120} style={{ marginBottom: "20px" }}  />
              <Skeleton width="50%" height={43}  />
            </div>
          </div>
        </div>
      </div>
    </ArticlesWrapper>
    )
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
