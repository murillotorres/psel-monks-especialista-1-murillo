
import styled from 'styled-components';

export const FormWrapper = styled.section`
  .form {
    background-color: #2D2D2D;
    padding: 60px 0;
  }
  .form-app .message {
    display: block;
    text-align: center; 
    color: #fff; padding: 13px 20px; border-radius: 5px; margin-bottom: 20px;
  }

  .form-app .success {
  background:#4caf50;
  }

  .form-app .error {
    background:#f44336;
  }
  .form-app {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 40px;
  }

  .img {
    max-width: calc(100% - 851px);
    width:30%;
  }

  .img img {
    height: auto;
  }

  .form-box {
    flex: 1;
    background: #EAE8E4;
    padding: 30px;
    border-radius: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width:100%;
    max-width:851px;
  }

  p {
    color:#2D2D2D;
    font-size:20px;
    font-weight:300;
    line-height:1.3;
    margin-bottom:30px;
  }

  span {
    display: block;
    font-size: 16px;
    color: #2D2D2D;
    font-weight:300;
    margin-bottom: 15px;
  }

  form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
  }

  .input {
    width: calc(50% - 10px);
    padding:0 15px;
    box-sizing:border-box;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    height:42px;
    color:#777777;
    transition:0.5s;
    outline: 1px solid #ffffff;
  }
  .input:focus {
    outline: 1px solid #b3b3b3;
  } 

  .captcha {
    display: flex;
    align-items: center;
    gap: 0px 30px;
    border-radius: 5px;
    margin:15px 0;
    width:100%;
    justify-content: space-between;
  }

  .captcha .challenge {
    display: flex;
    align-items: center;
    gap:0px 5px;
    padding:10px 30px;
    width:178px;
    justify-content:space-between;
    border-radius:8px;
    background:#DFDCD5;
  }

  .captcha span {
        font-size: 24px;
        color:#2D2D2D;
        display:block;
        font-weight:400;
        white-space: nowrap;
        margin-bottom:0px;
    }

  .captcha .numbers {
    font-size: 20px;
    color:#7D26C9;
    font-weight: bold;
  }

  .captcha .equal  {
    font-size: 24px;
    color:#2D2D2D;
    font-weight: bold;
  }

  
  .captcha .operation  {
    font-size: 24px;
    color:#2D2D2D;
    font-weight: bold;
    height:10px;
    line-height:10px;
  }

  .captcha .input {
    max-width: 234px;
  }

  .btn {
    padding: 13px 40px;
    background: #DFBBFE;
    border-radius: 4px;
    display: block;
    width: fit-content;
    margin: auto;
    color: #2D2D2D;
    margin-top: 0px;
    font-size: 16px;
    font-weight: 600;
    border:none;
    cursor:pointer;
    transitions:0.5s
   }

   .btn:disabled {
    opacity:0.7;
   }

  @media (max-width: 1100px) {
    .img {
      width:100%;
      margin-bottom:40px;
      max-width:100%;
    }

    .img img {
      margin:auto;
      display:block;
    }

    .form-app {
      display:block;
    }
    .form-box {
      max-width:100%;
    }
  }

  @media (max-width: 768px) {
    .captcha {
      flex-wrap:wrap;
      gap:0px;
    }

    .input {
      width:100%;
    }
    .captcha .challenge {
      width:calc(50% - 30px);
      padding:10px 20px;
    }

    .captcha span {
      margin-bottom:10px;
      font-size:20px;
    }

    .captcha .input {
      width:calc(50% - 10px);
    }


  }

`;