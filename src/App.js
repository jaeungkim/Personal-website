import React, { lazy, Suspense } from "react";
import ExperienceComponent from "./components/experience/experience";
import PreloaderComponent from "./components/preloader/preloader";
import ThemeComponent from "./components/theme/theme";
import HeroComponent from "./components/hero/hero";
import "./App.scss";

const AboutComponent = lazy(() => import("./components/about/about"));
const WorkComponent = lazy(() => import("./components/work/work"));
const ProjectComponent = lazy(() => import("./components/project/project"));
const ContactComponent = lazy(() => import("./components/contact/contact"));

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
          <Suspense fallback={<div>Loading...</div>}>
            <AboutComponent />
            <div className="second-move section-margin"></div>
            <WorkComponent />
            <div className="third-move section-margin"></div>
            <ProjectComponent />
            <div className="fourth-move section-margin"></div>
            <ContactComponent />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
