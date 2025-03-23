import styled from 'styled-components';

export const TagSectionWrapper = styled.section`
  .tagsection {
    margin-bottom:60px;
  }

  h2 {
    font-size: 40px;
    color: #2D2D2D;
    margin-bottom: 30px;
    font-weight:500;
  }
  
  .tagsection-app {
    display: flex;
    flex-wrap: wrap;
    margin:auto;
    max-width:90%;
    justify-content: center;
    gap: 20px;
  }

  .tagsection-app div {
    background-color: #DFDCD5;
    color: #7D26C9;
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 20px;
    font-weight: 600;
    border: 1px solid #7D26C9;
  }

  @media (max-width: 1100px) {
    .tagsection-app {
      max-width:100%;
      gap:15px;
    }
  }

  @media (max-width: 768px) {
   .tagsection-app div {
      font-size:18px;
      padding:10px 20px;
    }
  }
    
`;
