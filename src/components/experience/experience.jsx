import React, { useRef, useEffect } from "react";
import Experience from "../../js/Experience/Experience.js";
import "./index.scss";

function ExperienceComponent() {
  const ref = useRef(null);
  useEffect(() => {
    const experienceSelector = ref.current;

    new Experience(experienceSelector);
  }, []);

  return (
    <div className="experience">
      <canvas ref={ref} className="experience-canvas"></canvas>
    </div>
  );
}

export default ExperienceComponent;
