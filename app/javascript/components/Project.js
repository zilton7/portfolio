import React from "react";

const Project = ({ project }) => {
  const tags = project.tags
    .split(",")
    .map((tag) => <span className="tag">{tag.trim()}</span>);

  return (
    <div
      className={`project ${
        ["2", "4", "8"].includes(project.position)
          ? "span-row-2  span-col-2"
          : ""
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)), 
        url(${project.image})`,
      }}
    >
      <div className="project-title-wrapper">
        <p className="project-title">{project.name}</p>
        <div className="project-tags">{tags}</div>
      </div>
      <button className="project-button">See this project →</button>
    </div>
  );
};

export default Project;
