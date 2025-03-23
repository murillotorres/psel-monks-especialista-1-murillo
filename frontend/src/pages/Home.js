import React, { useEffect, useState } from "react";
import api from "../services/api";
import GlobalStyles from '../styles/GlobalStyles.js';
import Banner from "../components/Banner/Banner.js";
import Section2 from '../components/Section2/Section2.js';
import Section3 from '../components/Section3/Section3.js';
import AppDownload from "../components/AppDownload/AppDownload.js";
import TagSection from "../components/TagSection/TagSection.js";
import Articles from "../components/Articles/Articles.js";
import Form from "../components/Form/Form.js";
import Footer from "../components/Footer/Footer.js";
import Header from "../components/Header/Header.js";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Banner />
      <Section2 />
      <Section3 />
      <AppDownload />
      <TagSection />
      <Articles />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
