import styled from "styled-components";

const HeaderContainer = styled.header`
  background: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <h1>Meu Site One Page</h1>
    </HeaderContainer>
  );
}
