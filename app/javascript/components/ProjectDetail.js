import React from "react";
import { useHistory } from "react-router-dom";

const ProjectDetail = ({ project }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const el = e.target;
    if (el.classList.contains("close-project-detail")) {
      history.push("/");
    }
  };
  console.log("i am here");
  return (
    <div
      className="project-detail-shadow close-project-detail"
      role="button"
      tabIndex="0"
      onClick={exitDetailHandler}
      onKeyDown={exitDetailHandler}
    >
      <div className="project-detail">
        <div className="project-detail-head">
          <span
            className="close-project-detail"
            role="button"
            tabIndex="0"
            onClick={exitDetailHandler}
            onKeyDown={exitDetailHandler}
          >
            X
          </span>
        </div>
        <div className="project-detail-wrapper">
          <h3 className="project-detail-name">{project.name}</h3>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
