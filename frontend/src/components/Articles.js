import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import styled from 'styled-components';

const ArticlesWrapper = styled.section`
  .articles {
    margin-bottom:60px;
  }

  .articles-app {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
  }

  .item {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    background-color: #F4F4F4;
    padding: 30px 25px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    width: calc(33.3% - 40px);
    box-shadow: 0px 2px 24px rgba(0, 0, 0, 0.1);
    border:2px solid #DFBBFE;
  }

  h3 {
    font-size: 24px;
    color: #2D2D2D;
    font-weight:500;
    margin-bottom: 15px;
  }

    p {
    color:#2D2D2D; 
    font-size:20px;
    line-height:30px;
    font-weight:300;
  }

  .btn {
    padding: 13px 40px;
    background: #DFBBFE;
    border-radius: 4px;
    display:block;
    width: fit-content;
    margin:auto;
    color:#2D2D2D;
    margin-top:20px;
    font-size:16px;
    font-weight:600;
  }
`;

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
