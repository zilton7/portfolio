import React from "react";

const Project = ({ project }) => {
  return (
    <div className={`project project-${project.position}`}>{project.name}</div>
  );
};

export default Project;
