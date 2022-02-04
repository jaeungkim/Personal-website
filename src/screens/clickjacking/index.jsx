import React from "react";

const Clickjacking = () => {

  return (
    <div>
      <p>Website is vulnerable to clickjacking!</p>
      <iframe
        src="http://www.yoursite.com/sensitive-page"
        width="500"
        height="500"
      ></iframe>
    </div>
  );
};
export default Clickjacking;