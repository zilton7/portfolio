import React from "react";

const Nav = () => {
  return (
    <nav id="navbar">
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />

      <div id="navbar-items">
        <a href="#intro">Intro</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
