import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Section from "./components/Section";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Section title="Sobre nós" content="Texto dinâmico do banco de dados..." />
      <Section title="Nossos serviços" content="Mais informações aqui..." alternate />
      <Formulario />
      <Footer />
    </>
  );
}

export default App;
