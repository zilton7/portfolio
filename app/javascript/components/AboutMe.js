import React from "react";
import Squares from "./Squares";

const AboutMe = ({ title, description, resumeLink, abilities }) => {
  return (
    <div class="section about">
      <div class="about-wrapper">
        <div id="about" class="number">
          03
        </div>
        <h3 class="title">{title}</h3>
        <p class="paragraph">{description}</p>
        <div class="link-with-icon-wrapper">
          <span class="link-with-icon">
            <a href={resumeLink} target="_blank">
              Get my Resume<i class="fas fa-external-link-alt"></i>
            </a>
          </span>
        </div>
      </div>
      <Squares abilities={abilities} />
    </div>
  );
};

export default AboutMe;
