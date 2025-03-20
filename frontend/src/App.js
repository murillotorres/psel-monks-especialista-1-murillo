import React, { useEffect, useState } from "react";
import GlobalStyles from './styles/GlobalStyles.js';
import api from "./services/api";
import Banner from "./components/Banner";

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
    </>
  );
}

export default App;
