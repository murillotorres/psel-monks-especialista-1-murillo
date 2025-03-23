import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { FormWrapper } from './Form.style';

function Form() {
  const [formData, setFormData] = useState(null);
  const [captchaResult, setCaptchaResult] = useState('');
  const [captchaNumbers, setCaptchaNumbers] = useState({ num1: 0, num2: 0 });
  const [formValues, setFormValues] = useState({ name: '', email: '', phone: '', city: '', honeypot: '' });
  const [message, setMessage] = useState(null);


  // Função para aplicar a máscara no telefone
  const handlePhoneChange = (e) => {
    let phone = e.target.value.replace(/\D/g, ''); // Remove qualquer coisa que não seja número
    if (phone.length <= 2) {
      phone = `(${phone}`;
    } else if (phone.length <= 6) {
      phone = `(${phone.slice(0, 2)}) ${phone.slice(2)}`;
    } else {
      phone = `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7, 11)}`;
    }
    setFormValues({ ...formValues, phone });
  };

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
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaNumbers({ num1, num2 });
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (parseInt(captchaResult) !== captchaNumbers.num1 + captchaNumbers.num2) {
    setMessage({ type: 'error', text: 'Verificação de segurança incorreta!' });
    return;
  }

  setIsSubmitting(true); // Desativa o botão e mostra "Enviando.."

  try {
    const userIP = await fetch("https://api64.ipify.org?format=json")
      .then(res => res.json())
      .then(data => data.ip)
      .catch(() => "0.0.0.0");

    const response = await api.post('form-submit', formValues, {
      headers: {
        'Content-Type': 'application/json',
        'X-Form-Token': 'MONKS2025@',
        'X-User-IP': userIP
      }
    });

    setMessage({ type: 'success', text: response.data.message });
    setFormValues({ name: '', email: '', phone: '', city: '', honeypot: '' });
    setCaptchaResult('');
    generateCaptcha();
  } catch (error) {
    setMessage({ type: 'error', text: 'Erro ao enviar o formulário. Tente novamente!' });
    console.error("Erro ao enviar formulário:", error);
  } finally {
    setIsSubmitting(false); // Reativa o botão após envio
  }
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

              {message && (
                <div className={`message ${message.type}`}>{message.text}</div>
              )}

              <form onSubmit={handleSubmit}>
                <input type="text" name="honeypot" value={formValues.honeypot} onChange={handleChange} style={{ display: "none" }} autoComplete="off" tabIndex="-1" aria-hidden="true" />
                <input className="input" type="text" name="name" required placeholder="Nome*" value={formValues.name} onChange={handleChange} />
                <input className="input" type="email" name="email" required placeholder="E-mail*" value={formValues.email} onChange={handleChange} />
                <input className="input" type="text" name="phone" placeholder="Telefone" value={formValues.phone} onChange={handlePhoneChange} />
                <input className="input" type="text" name="city" placeholder="Cidade" value={formValues.city} onChange={handleChange} />

                <div className="captcha">
                  <span>Verificação de Segurança</span>
                  <div className="challenge">
                    <div className="numbers">{captchaNumbers.num1}</div>
                    <div className="operation">+</div>
                    <div className="numbers">{captchaNumbers.num2}</div>
                  </div>
                  <div className="equal">=</div>
                  <input className="input result" type="text" required placeholder="Resultado*" value={captchaResult} onChange={(e) => setCaptchaResult(e.target.value)} />
                </div>
                <input type="submit" value={isSubmitting ? "Enviando..." : "Enviar"} className="btn" disabled={isSubmitting} />
              </form>
            </div>
          </div>
        </div>
      </div>
    </FormWrapper>
  );
}

export default Form;
