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
          Hi there 👋! My name is Jaeung Kim, but I go by the name Jae. I am a
          full stack web developer with 2 years of working experience. I have
          planned, developed, distributed, and maintained software for startup
          companies.
        </p>
        <p className="section-text">
          I believe that actively communicating is one of the most important
          factors in making a big impact in software development. Therefore, I
          love to engage in proactive communications among team members. By
          doing so, I am able to grow as a better developer constantly.
        </p>
        <p className="section-text">
          During my free time, I love exploring latest 3D technologies like
          Three.js, WebGL and Blender. In fact, this website was created using
          these technologies.
        </p>
      </div>
    </section>
  );
}

export default AboutComponent;
