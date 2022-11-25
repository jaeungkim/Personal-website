import React from "react";
// import { gsap } from "gsap";
import "./index.scss";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__brand">
        <button className="Navbar__logo" type="button">
          <span className="Navbar__logo-text">
            <a className="Navbar__list-link" href="/">
              Jaeung Kim
            </a>
          </span>
        </button>
      </div>

      <div className="Navbar__collapse">
        <ul className="Navbar__list-div">
          <li className="Navbar__list-item">
            <a className="Navbar__list-link" href="/about">
              About
            </a>
          </li>

          <li className="Navbar__list-item">
            <a className="Navbar__list-link" href="/about">
              Skills
            </a>
          </li>

          <li className="Navbar__list-item">
            <a className="Navbar__list-link" href="/about">
              Projects
            </a>
          </li>

          <li className="Navbar__list-item">
            <a className="Navbar__list-link" href="/about">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
