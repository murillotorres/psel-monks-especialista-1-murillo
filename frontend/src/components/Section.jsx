import styled from "styled-components";

const SectionContainer = styled.section`
  padding: 40px;
  background: ${(props) => (props.alternate ? "#f9f9f9" : "#fff")};
  text-align: center;
`;

export default function Section({ title, content, alternate }) {
  return (
    <SectionContainer alternate={alternate}>
      <h2>{title}</h2>
      <p>{content}</p>
    </SectionContainer>
  );
}
