import React from "react";
import Project from "./Project";

const Portfolio = ({ title, projects }) => {
  const projectList = projects.map((project) => <Project project={project} />);

  return (
    <div className="section portfolio">
      <div className="portfolio-title-wrapper">
        <div id="portfolio" className="number number-portfolio">
          02
        </div>
        <h3 className="title">{title}</h3>
      </div>
      <div className="projects">{projectList}</div>
    </div>
  );
};

export default Portfolio;
