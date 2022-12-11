import React from "react";
import ExperienceComponent from "./components/experience/experience";
import PreloaderComponent from "./components/preloader/preloader";
import AboutComponent from "./components/about/about";
import WorkComponent from "./components/work/work";
import ContactComponent from "./components/contact/contact";
import ThemeComponent from "./components/theme/theme";
import HeroComponent from "./components/hero/hero";
import ProjectComponent from "./components/project/project";
import "./App.scss";

function App() {
  return (
    <>
      <ExperienceComponent />
      <PreloaderComponent />
      <div className="page" asscroll-container="true">
        <ThemeComponent />
        <div className="page-wrapper" asscroll="true">
          <HeroComponent />
          <div className="first-move section-margin"></div>
          <AboutComponent />
          <div className="second-move section-margin"></div>
          <WorkComponent />
          <div className="third-move section-margin"></div>
          <ProjectComponent />
          <div className="fourth-move section-margin"></div>
          <ContactComponent />
        </div>
      </div>
    </>
  );
}

export default App;
