import React from "react";

const Links = ({ links }) => {
  const linkItems = links.map((link) => (
    <a href={link.link}>
      <i className={link.icon}></i>
    </a>
  ));
  return (
    <div className="social-links">
      <div className="icons">{linkItems}</div>
    </div>
  );
};

export default Links;
