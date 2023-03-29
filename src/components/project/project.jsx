import React from "react";
import "./index.scss";
function ProjectComponent() {
  return (
    <section className="second-section section left">
      <div className="progress-wrapper progress-bar-wrapper-left">
        <div className="progress-bar blue-background"></div>
      </div>

      <div className="section-intro-wrapper blue-text blue-border">
        <h1 className="section-title blue-text blue-border">
          <span className="section-title-text blue-text"></span>
          <div className="section-title-decoration styleOne blue-border"></div>
          <div className="section-title-decoration styleTwo blue-border"></div>
          <div className="section-title-decoration styleThree blue-background blue-border"></div>
        </h1>
        <span className="section-number blue-text"></span>
      </div>

      <div className="section-detail-wrapper">
        <h3 className="section-heading"></h3>
        <p className="section-text"></p>
        <h3 className="section-heading"></h3>
        <p className="section-text"></p>
      </div>
    </section>
  );
}

export default ProjectComponent;
