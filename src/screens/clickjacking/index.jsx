import React from "react";

const Clickjacking = () => {

  return (
    <div>
      <p>Website is vulnerable to clickjacking!</p>

          <iframe
            src="https://www.youtube.com/embed/ZGejseN8P5s"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="youtube video player"

          />
  
      <iframe
        src="https://www.yoursite.com/sensitive-page"
        width="500"
        height="500"
      ></iframe>
    </div>
  );
};
export default Clickjacking;