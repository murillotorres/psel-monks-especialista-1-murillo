import React, { useEffect, useState } from "react";
import GlobalStyles from './styles/GlobalStyles.js';
import api from "./services/api";
import Banner from "./components/Banner";
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import AppDownload from "./components/AppDownload.js";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Banner />
      <Section2 />
      <Section3 />
      <AppDownload />
    </>
  );
}

export default App;
