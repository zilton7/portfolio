import React from "react";
import Project from "./Project";

const ProjectPanel = ({ projects }) => {
  const projectList = projects.map((project) => <Project project={project} />);

  return <div className="projects">{projectList}</div>;
};

export default ProjectPanel;
