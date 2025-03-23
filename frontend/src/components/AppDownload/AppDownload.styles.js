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
    width:calc(100% - 217px;)
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
`;