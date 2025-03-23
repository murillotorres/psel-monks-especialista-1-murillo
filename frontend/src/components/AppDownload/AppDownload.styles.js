import styled from 'styled-components';

export const AppDownloadWrapper = styled.section`
  .app_download {
    margin-bottom:60px;
  }

  .content {
    display: flex;
    align-items: center;
    background:#3C0C60;
    padding:40px 30px; 
    border-radius:30px;
    color:#fff;
  }

  .text {
    margin-bottom: 20px;
    width:calc(100% - 217px);
    padding-right:50px;
  }

  h2 {
    font-size: 40px;
    margin-bottom: 10px;
    font-weight:500;
  }

  p {
    font-size: 24px;
    font-weight:300;
    line-height: 1.5;
  }

  .links {
    width:217px;
  }

  .links a {
    display:block;
    margin-bottom:5px;
  }

  .links img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1100px) {
    .content {
      justify-content: space-between;
    }

    .text {
      width:calc(100% - 250px);
    }

    .links {
      width: 200px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 820px) {
    .content {
      display:block;
    }

    .text {
      width:100%;
      padding:0px;
      margin-bottom:30px;
    }

    .links {
      width: 100%;
      display:flex;
      aling-items:center;
      justify-content:center;
      gap:0px 20px;
    }

    .links img {
      width: 200px;
    }


  }

`;