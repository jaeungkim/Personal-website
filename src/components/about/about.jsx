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
          <span className="section-title-text">About Me</span>
          <div className="section-title-decoration styleOne"></div>
          <div className="section-title-decoration styleTwo"></div>
          <div className="section-title-decoration styleThree"></div>
        </h1>
        <span className="section-number">01</span>
      </div>

      <div className="section-detail-wrapper">
        <p className="section-text">
          Hi there 👋! Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </p>
        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </section>
  );
}

export default AboutComponent;
