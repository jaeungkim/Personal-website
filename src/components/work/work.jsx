import React from "react";
import "./index.scss";
function WorkComponent() {
  return (
    <section className="second-section section right">
      <div className="progress-wrapper progress-bar-wrapper-right">
        <div className="progress-bar blue-background"></div>
      </div>

      <div className="section-intro-wrapper blue-text blue-border">
        <h1 className="section-title blue-text blue-border">
          <span className="section-title-text blue-text">My Work</span>
          <div className="section-title-decoration styleOne blue-border"></div>
          <div className="section-title-decoration styleTwo blue-border"></div>
          <div className="section-title-decoration styleThree blue-background blue-border"></div>
        </h1>
        <span className="section-number blue-text">02</span>
      </div>

      <div className="section-detail-wrapper">
        <h3 className="section-heading">AiClinic</h3>
        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h3 className="section-heading">Catalyx.io</h3>
        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </section>
  );
}

export default WorkComponent;
