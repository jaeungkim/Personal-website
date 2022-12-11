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
          <span className="section-text-title">
            Hi there 👋! My name is Jaeung Kim
          </span>
          <br></br>
          You can also call me <strong>Jae</strong> 🙂.
          <br></br>
          <br></br>I am an ambitious, creative, and collaboriative software
          engineer with 2 years of experience in planning, developing,
          distributing, and maintaining software for startup companies. I
          primarily focuse on full-stack web development but I also have
          experiences working as a designer and product owners dependings on the
          needs of the company.
        </p>
        <p className="section-text">
          When I work, I believe that actively communicating is one of the most
          important factors in making a big impact and being successful. Thus, I
          am always trying to engage in proactive communications among team
          members. And by doing so, I am able to grow as a better developer
          constantly.
        </p>
        <p className="section-text">
          These days, during my free time, I love working on my 3D projects
          using latest 3D technologies like Three.js, WebGL and Blender.
        </p>
      </div>
    </section>
  );
}

export default AboutComponent;
