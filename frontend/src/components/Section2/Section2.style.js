import styled from 'styled-components';

export const Section2Section = styled.section`

  .section2 {
    padding: 60px 0px;
  }
  
  .section2 h2 {
    font-size:40px;
    font-weight:500;
    color:#2D2D2D;
    margin-bottom:10px;
    line-height:1.2;
  }

  .section2 p {
    color:#2D2D2D;
    font-size:24px;
    font-weight:300;
  }

  .section2-app {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    margin-left: -10px;
    margin-right:-10px;
  }

  .section2-app-item {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: calc(25% - 20px);
    margin: 10px;
    padding: 5px;
  }

  .section2-app-item img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom:10px;
  }

  .section2-app-item h3 {
    font-size: 24px;
    color: #333;
    padding:0px 8px;
    font-weight:500;
    margin-bottom:5px;
  }

  .section2-app-item p {
    font-size: 20px;
    color: #0C111D;
    line-height:30px;
    padding:0px 8px 10px 8px;
    font-weight:300;
  }
`;