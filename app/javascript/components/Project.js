import React from "react";

const Project = ({ project }) => {
  return <div className={`project-${project.id}`}>{project.name}</div>;
};

export default Project;
