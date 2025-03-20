import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>© 2025 Meu Site One Page</p>
    </FooterContainer>
  );
}
