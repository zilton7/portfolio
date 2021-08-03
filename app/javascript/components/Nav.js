import React from "react";
import Intro from "./Intro";
const Nav = () => {
  return (
    <nav id="navbar">
      <label htmlFor="hamburger">&#9776;</label>
      <input type="checkbox" id="hamburger" />

      <div id="navbar-items">
        <a onClick={() => window.location.replace("/#intro")}>Intro</a>
        <a onClick={() => window.location.replace("/#portfolio")}>Portfolio</a>
        <a onClick={() => window.location.replace("/#about")}>About</a>
        <a onClick={() => window.location.replace("/#contact")}>Contact</a>
      </div>
    </nav>
  );
};

export default Nav;
