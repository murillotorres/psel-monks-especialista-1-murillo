import styled from 'styled-components';

export const Section3Wrapper = styled.section`
  .section3 {
    padding-bottom:60px;
  }
  .section3-app {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    margin:0px -15px;
  }

  .col-6 {
    width: 50%;
    padding:15px;
    box-sizing:border-box;
  }

  p {
    color:#2D2D2D;
    font-size:24px;
    font-weight:300;
    line-height:1.3;
    margin-bottom:30px;
  }

  img {
    width: 100%;
    display: block;
  }

  
  .img-space-full {
    height:523px;
    overflow:hidden;
    display:flex;
    border-radius: 30px;
    align-items: center;
    margin-bottom: 30px;
    box-shadow: 0px 5px 10px 0px #0000004a;
  }

  .img-space-medium {
    height:346px;
    overflow:hidden;
    display:flex;
    border-radius: 30px;
    align-items: center;
    margin-bottom: 30px;
    box-shadow: 0px 5px 10px 0px #0000004a;
  }

  @media (max-width: 1100px) {
    .img-space-full {
      height: 300px;
    }
    
    .img-space-medium {
      height: 266px;
    }
  }

  @media (max-width: 1100px) {
    .col-6 {
      width:100%;
    }

    .img-space-full {
      height: auto;
    }
    
    .img-space-medium {
      height: auto;
    }
  }

`;
