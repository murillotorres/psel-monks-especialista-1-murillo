import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { FormWrapper } from './Form.style'

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
