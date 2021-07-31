import React from "react";

const AboutMe = ({ title, description, resumeLink }) => {
  return (
    <div id="about" class="section about">
      <div class="about-wrapper">
        <div class="number">03</div>
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
    </div>
  );
};

export default AboutMe;
