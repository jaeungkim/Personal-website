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
          <span className="section-title-text green-text"></span>
          <div className="section-title-decoration styleOne green-border"></div>
          <div className="section-title-decoration styleTwo green-border"></div>
          <div className="section-title-decoration styleThree green-background green-border"></div>
        </h1>
        <span className="section-number green-text"></span>
      </div>

      <div className="section-detail-wrapper">
        <h3 className="section-heading"></h3>
        <p className="section-text">

        </p>
        <h3 className="section-heading"></h3>
        <p className="section-text"></p>
        <h3 className="section-heading"></h3>
        <p className="section-text"></p>
      </div>
    </section>
  );
}

export default ContactComponent;
