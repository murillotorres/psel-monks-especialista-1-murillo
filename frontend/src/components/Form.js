import React, { useState, useEffect } from 'react';
import api from '../api/axios';
import styled from 'styled-components';

const FormWrapper = styled.section`
  .form {
    background-color: #2D2D2D;
    padding: 60px 0;
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

  h2 {
    font-size:40px;
    font-weight:500;
    color:#2D2D2D;
    margin-bottom:10px;
    line-height:1.2;
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
   }
`;

function Form() {
  const [formData, setFormData] = useState(null);
  const [captchaResult, setCaptchaResult] = useState('');
  const [captchaNumbers, setCaptchaNumbers] = useState({ num1: 0, num2: 0 });

  useEffect(() => {
    api.get('pages/7?acf_format=standard')
      .then((response) => {
        setFormData(response.data.acf);
        generateCaptcha();
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    setCaptchaNumbers({ num1, num2 });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(captchaResult) !== captchaNumbers.num1 + captchaNumbers.num2) {
      alert('Verificação de segurança incorreta!');
      return;
    }
    alert('Formulário enviado com sucesso!');
  };

  if (!formData) {
    return <div>Carregando...</div>;
  }

  return (
    <FormWrapper>
      <div className="form">
        <div className="container">
          <div className="form-app">
            <div className="img">
              <img src={formData.form_img} alt="Form" />
            </div>
            <div className="form-box">
              <h2>{formData.form_title}</h2>
              <p>{formData.form_description}</p>
              <span>{formData.form_support_text}</span>

              <form onSubmit={handleSubmit}>
                <input className="input" type="text" required placeholder="Nome*" />
                <input className="input" type="email" required placeholder="E-mail*" />
                <input className="input sp_cellphones" type="text" placeholder="Telefone" />
                <input className="input" type="text" placeholder="Cidade" />

                <div className="captcha">
                  <span>Verificação de Segurança</span>
                  <div className="challenge">
                    <div className="numbers">{captchaNumbers.num1}</div>
                    <div className="operation">+</div>
                    <div className="numbers">{captchaNumbers.num2}</div>
                  </div>
                  <div className="equal">=</div>
                  <input
                    className="input result"
                    type="text"
                    required
                    placeholder="Resultado*"
                    value={captchaResult}
                    onChange={(e) => setCaptchaResult(e.target.value)}
                  />
                </div>
                <input type="submit" value="Enviar" className="btn" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default Form;
