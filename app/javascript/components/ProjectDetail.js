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

  return (
    // <div
    //   className="project-detail-shadow close-project-detail"
    //   role="button"
    //   tabIndex="0"
    //   onClick={exitDetailHandler}
    //   onKeyDown={exitDetailHandler}
    // >
    //   <div className="project-detail">
    //     <div className="project-detail-head">
    //       <span
    //         className="close-project-detail"
    //         role="button"
    //         tabIndex="0"
    //         onClick={exitDetailHandler}
    //         onKeyDown={exitDetailHandler}
    //       >
    //         X
    //       </span>
    //     </div>
    //     <div className="project-detail-wrapper">
    //       <h3 className="project-detail-name">{project.name}</h3>
    //       <img src={project.image} alt="" />
    //     </div>
    //   </div>
    // </div>
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
          <p className="modal-title" id="project-title"></p>
        </div>
        <div className="project-tags" id="project-tags"></div>
        <div className="modal-image-wrapper">
          <div id="arrow-prev" className="arrow">
            <i className="fas fa-arrow-circle-left"></i>
          </div>
          <div className="modal-image">
            <img src="" id="project-image" alt="" />
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
        ></div>
      </div>
    </div>
  );
};

export default ProjectDetail;
