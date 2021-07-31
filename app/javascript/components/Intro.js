import React from "react";
import Links from "./Links";

const Intro = ({ title, description, links }) => {
  return (
    <div id="intro" className="section intro">
      <div className="intro-wrapper">
        <div className="number number-intro">01</div>
        <h3 className="title">{title}</h3>
        <p className="paragraph">{description}</p>
        <Links links={links} />
      </div>
    </div>
  );
};

export default Intro;
