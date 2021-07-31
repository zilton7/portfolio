import React from "react";

const Square = ({ name, skills, icon }) => {
  const skillList = skills.split(",").map((skill) => <li>{skill.trim()}</li>);

  return (
    <div className={`square ${name.toLowerCase()}`}>
      <div
        className={`${name.toLowerCase().replace(" ", "-")}-icon square-icon`}
      >
        <i className={icon}></i>
      </div>
      <p className="square-title">{name}</p>
      <ul className="skill-list">{skillList}</ul>
    </div>
  );
};

export default Square;
