import React from "react";
import "./index.scss";
function PreloaderComponent() {
  return (
    <div className="preloader">
      <div className="preloader-wrapper">
        <span className="loader"></span>
      </div>
    </div>
  );
}

export default PreloaderComponent;
