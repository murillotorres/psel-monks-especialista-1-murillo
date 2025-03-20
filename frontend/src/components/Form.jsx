import { useForm } from "react-hook-form";
import styled from "styled-components";

const FormContainer = styled.section`
  padding: 40px;
  background: #fff;
  text-align: center;
`;

const Form = styled.form`
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background: blue;
  color: white;
  border: none;
  cursor: pointer;
`;

export default function Formulario() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <h2>Entre em contato</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register("nome")} placeholder="Seu nome" required />
        <Input {...register("email")} placeholder="Seu e-mail" required />
        <Button type="submit">Enviar</Button>
      </Form>
    </FormContainer>
  );
}
