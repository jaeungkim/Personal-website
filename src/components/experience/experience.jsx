import React, { useRef, useEffect } from "react";
import Experience from "../../js/Experience/Experience.js";

function ExperienceComponent() {
  const ref = useRef(null);
  useEffect(() => {
    const experienceSelector = ref.current;
    const experience = new Experience(experienceSelector);
  }, []);

  return (
    <div className="experience">
      <canvas ref={ref} className="experience-canvas"></canvas>
    </div>
  );
}

export default ExperienceComponent;
