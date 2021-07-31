import React, { useState, useEffect } from "react";
import axios from "axios";
import Portfolio from "./Portfolio";
import Nav from "./Nav";
import Intro from "./Intro";

const App = () => {
  const [texts, setTexts] = useState({});
  const [projects, setProjects] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/texts")
      .then((response) => {
        setTexts(response.data[0]);
      })
      .catch((response) => console.log(response));
    axios
      .get("http://localhost:3000/api/v1/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((response) => console.log(response));
    axios
      .get("http://localhost:3000/api/v1/links")
      .then((response) => {
        setLinks(response.data);
        console.log(response.data);
      })
      .catch((response) => console.log(response));
  }, []);

  return (
    <>
      <Nav />
      <Intro
        title={texts.intro_title}
        description={texts.intro_description}
        links={links}
      />
      <Portfolio title={texts.portfolio_title} projects={projects} />
    </>
  );
};

export default App;
