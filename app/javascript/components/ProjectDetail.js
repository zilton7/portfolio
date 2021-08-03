import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const ProjectDetail = ({ projects, index }) => {
  const [currentProject, setCurrentProject] = useState(projects[index]);

  const tags = currentProject.tags
    .split(",")
    .map((tag) => <span className="tag">{tag.trim()}</span>);

  const skipProjectHandler = (direction) => {
    let currentIndex = projects.findIndex(
      (project) => project.id === currentProject.id
    );
    if (direction === "next") {
      setCurrentProject(projects[(currentIndex + 1) % projects.length]);
    } else if (direction === "prev") {
      let nextProject = projects[currentIndex - 1];
      nextProject
        ? setCurrentProject(nextProject)
        : setCurrentProject(projects[projects.length - 1]);
    }
  };

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
            {currentProject.name}
          </p>
        </div>
        <div className="project-tags" id="project-tags">
          {tags}
        </div>
        <div className="modal-image-wrapper">
          <div
            id="arrow-prev"
            className="arrow"
            onClick={() => skipProjectHandler("prev")}
          >
            <i className="fas fa-arrow-circle-left"></i>
          </div>
          <div className="modal-image">
            <img src={currentProject.image} id="project-image" alt="" />
          </div>
          <div
            id="arrow-next"
            className="arrow"
            onClick={() => skipProjectHandler("next")}
          >
            <i className="fas fa-arrow-circle-right"></i>
          </div>
        </div>
        <p className="description modal-description" id="project-description">
          {currentProject.description}
        </p>
        <div
          className="link-with-icon-wrapper modal-link-wrapper"
          id="project-links"
        >
          {currentProject.live_link !== "" && (
            <span class="link-with-icon">
              <a
                href={currentProject.live_link}
                target="_blank"
                id="project-live-link"
              >
                See live<i class="fas fa-external-link-alt"></i>
              </a>
            </span>
          )}
          {currentProject.source_link !== "" && (
            <span class="link-with-icon">
              <a
                href={currentProject.source_link}
                target="_blank"
                id="project-source-link"
              >
                Check source<i class="fab fa-github-square"></i>
              </a>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
