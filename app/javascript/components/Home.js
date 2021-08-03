import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Portfolio from "./Portfolio";
import Nav from "./Nav";
import Intro from "./Intro";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import ProjectDetail from "./ProjectDetail";

const Home = ({ texts }) => {
  const [projects, setProjects] = useState([]);
  const [links, setLinks] = useState([]);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    axios
      .get("api/v1/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((response) => console.log(response));
    axios
      .get("api/v1/links")
      .then((response) => {
        setLinks(response.data);
      })
      .catch((response) => console.log(response));
    axios
      .get("api/v1/abilities")
      .then((response) => {
        setAbilities(response.data);
        console.log(response.data);
      })
      .catch((response) => console.log(response));
  }, []);

  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  return (
    <>
      <Nav />
      {pathId && (
        <ProjectDetail projects={projects} index={parseInt(pathId) - 1} />
      )}
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

export default Home;
