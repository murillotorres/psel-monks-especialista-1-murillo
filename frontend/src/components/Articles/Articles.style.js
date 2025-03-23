import styled from 'styled-components';

export const ArticlesWrapper = styled.section`
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

  @media (max-width: 1100px) {
    .articles-app {
      gap:10px;
    }

    .item {
      width: calc(33.3% - 10px);
    }
    
    p {
      font-size:18px;
      line-height:25px;
    }
  } 

    @media (max-width: 820px) {

      .articles-app {
        gap:30px 0px;
      }
      .item {
        width: 100%;
      }
    }

`;