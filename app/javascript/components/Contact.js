import React from "react";
import Links from "./Links";

const Contact = ({ title, description, links, resumeLink }) => {
  return (
    <div className="section contact">
      <div className="contact-wrapper">
        <div id="contact" className="number">
          04
        </div>
        <h3 className="title">{title}</h3>
        <p className="paragraph">{description}</p>
        <div className="contact-form">
          <form action="https://formspree.io/f/xleabkkn" method="POST">
            <div className="name-group">
              <label for="name">Your name</label>
              <br />
              <input type="text" id="name" name="name" required="" />
            </div>
            <div className="email-group">
              <label for="email">Your email</label>
              <br />
              <input type="email" name="_replyto" id="email" required="" />
            </div>
            <textarea
              id="body"
              name="message"
              placeholder="Enter your message here..."
              required=""
            ></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className="link-with-icon-wrapper">
          <span className="link-with-icon">
            <a href={resumeLink} target="_blank">
              Get my Resume<i className="fas fa-external-link-alt"></i>
            </a>
          </span>
        </div>
        <Links links={links} />
      </div>
    </div>
  );
};

export default Contact;
