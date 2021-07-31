import React, { useState, useEffect } from "react";
import axios from "axios";
import Portfolio from "./Portfolio";
import Nav from "./Nav";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

const App = () => {
  const [texts, setTexts] = useState({});
  const [projects, setProjects] = useState([]);
  const [links, setLinks] = useState([]);
  const [abilities, setAbilities] = useState([]);

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
      })
      .catch((response) => console.log(response));
    axios
      .get("http://localhost:3000/api/v1/abilities")
      .then((response) => {
        setAbilities(response.data);
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
      <AboutMe
        title={texts.aboutme_title}
        description={texts.aboutme_description}
        resumeLink={texts.resume_link}
        abilities={abilities}
      />
      <Contact
        title={texts.contact_title}
        description={texts.contact_description}
        links={links}
        resumeLink={texts.resume_link}
      />
    </>
  );
};

export default App;
