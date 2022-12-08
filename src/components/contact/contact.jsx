import React from "react";
import "./index.scss";
function ContactComponent() {
  return (
    <section className="third-section section left">
      <div className="progress-wrapper progress-bar-wrapper-left">
        <div className="progress-bar green-background"></div>
      </div>

      <div className="section-intro-wrapper green-text green-border">
        <h1 className="section-title green-text green-border">
          <span className="section-title-text green-text">Contact Me</span>
          <div className="section-title-decoration styleOne green-border"></div>
          <div className="section-title-decoration styleTwo green-border"></div>
          <div className="section-title-decoration styleThree green-background green-border"></div>
        </h1>
        <span className="section-number green-text">03</span>
      </div>

      <div className="section-detail-wrapper">
        <h3 className="section-heading">GitHub</h3>
        <p className="section-text">
          I post all my work here. I don't want to link it yet because I want to
          sort it out a little bit!
        </p>
        <h3 className="section-heading">Instagram</h3>
        <p className="section-text">
         Lorem
        </p>
        <h3 className="section-heading">LinkedIn</h3>
        <p className="section-text">Career updates and so much more!</p>
      </div>
    </section>
  );
}

export default ContactComponent;
