import React from "react";
import "./index.scss";
function AboutComponent() {
  return (
    <section className="first-section section left">
      <div className="progress-wrapper progress-bar-wrapper-left">
        <div className="progress-bar"></div>
      </div>

      <div className="section-intro-wrapper">
        <h1 className="section-title">
          <span className="section-title-text"></span>
          <div className="section-title-decoration styleOne"></div>
          <div className="section-title-decoration styleTwo"></div>
          <div className="section-title-decoration styleThree"></div>
        </h1>
        <span className="section-number"></span>
      </div>

      <div className="section-detail-wrapper">
        <p className="section-text">
          <span className="section-text-title"></span>
        </p>
        <p className="section-text"></p>
        <p className="section-text"></p>
      </div>
    </section>
  );
}

export default AboutComponent;
