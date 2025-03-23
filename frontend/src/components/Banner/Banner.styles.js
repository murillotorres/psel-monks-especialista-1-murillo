import styled from 'styled-components';

export const BannerSection = styled.section`
  .banner {
    background-color: #2D2D2D;
    padding-top: 120px;
    padding-bottom:150px;
    overflow:hidden;
    border-radius:0px 0px 30px 30px;
    display:block;
  }

  h1 {
    font-size: 48px;
    color: #EAE8E4;
    margin-bottom: 20px;
    max-width:700px;
  }

  p {
    font-size: 24px;
    color: #EAE8E4;
    line-height: 1.6;
    max-width:600px;
    font-weight:300;
  }

  .img {
    width: 100%;
    max-width: 600px;
    height: auto;
    display: block;
    position:absolute;
    top:-120px;
    right:0px;
  }

  @media (max-width: 1380px) {
    .img {
      right:-30px;
    }
  }

  @media (max-width: 1100px) {
    .img {
      right:-200px;
    }
    
    h1 {
      max-width:500px;
    }

    p {
      max-width:500px;
    }
  }




`;
