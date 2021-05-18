import React, { useState } from "react";
import { Link } from "react-scroll";
import "./local.scss";

const MainHeader = () => {
  //change color of navbar on scroll
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 500) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={
        colorChange
          ? "navbar navbar-expand-lg colorChange fixed-top"
          : "navbar navbar-expand-lg custom-nav fixed-top"
      }
    >
      <Link
        activeClass="active"
        className="navbar-brand"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        style={{ colorChange }}
        onClick={scroll.scrollToTop}
      >
        <p className={colorChange ? "font-black" : "font-white"}>Jae Kim</p>
      </Link>
      <button
        className={
          colorChange
            ? "navbar-toggler font-black"
            : "navbar-toggler font-white"
        }
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link
              className="active nav-link"
              onClick={scroll.scrollToTop}
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <p className={colorChange ? "font-black" : "font-white"}>Home</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="active nav-link"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <p className={colorChange ? "font-black" : "font-white"}>About</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="active nav-link"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <p className={colorChange ? "font-black" : "font-white"}>Experiences</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="active nav-link"
              to="skill"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <p className={colorChange ? "font-black" : "font-white"}>Skills</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="active nav-link"
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <p className={colorChange ? "font-black" : "font-white"}>Projects</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="active nav-link"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ cursor: "pointer" }}
            >
              <p className={colorChange ? "font-black" : "font-white"}>Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default MainHeader;
