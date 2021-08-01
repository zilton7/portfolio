import React from "react";
import { useHistory } from "react-router-dom";

const ProjectDetail = ({ project }) => {
  const tags = project.tags
    .split(",")
    .map((tag) => <span className="tag">{tag.trim()}</span>);

  const history = useHistory();
  const exitDetailHandler = (e) => {
    const el = e.target;
    if (el.classList.contains("close-project-detail")) {
      history.push("/");
    }
  };

  return (
    <div
      id="project-modal"
      className="modal close-project-detail"
      onClick={exitDetailHandler}
      onKeyDown={exitDetailHandler}
    >
      <div className="modal-content">
        <div className="modal-head">
          <span
            className="close close-project-detail"
            onClick={exitDetailHandler}
            onKeyDown={exitDetailHandler}
          >
            &times;
          </span>
          <p className="modal-title" id="project-title">
            {project.name}
          </p>
        </div>
        <div className="project-tags" id="project-tags">
          {tags}
        </div>
        <div className="modal-image-wrapper">
          <div id="arrow-prev" className="arrow">
            <i className="fas fa-arrow-circle-left"></i>
          </div>
          <div className="modal-image">
            <img src={project.image} id="project-image" alt="" />
          </div>
          <div id="arrow-next" className="arrow">
            <i className="fas fa-arrow-circle-right"></i>
          </div>
        </div>
        <p className="description modal-description" id="project-description">
          {project.description}
        </p>
        <div
          className="link-with-icon-wrapper modal-link-wrapper"
          id="project-links"
        >
          <span class="link-with-icon">
            <a href={project.live_link} target="_blank" id="project-live-link">
              See live<i class="fas fa-external-link-alt"></i>
            </a>
          </span>
          <span class="link-with-icon">
            <a
              href={project.source_link}
              target="_blank"
              id="project-source-link"
            >
              Check source<i class="fab fa-github-square"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
