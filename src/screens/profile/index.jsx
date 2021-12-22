import React from "react";
import Particles from "react-particles-js";
import Typical from "react-typical";
import { Link } from "react-scroll";
import "./local.scss";

const Profile = () => {
  return (
    <section styleName="custom-profile" id="home">
      <div styleName="bg-overlay">
        <Particles
          canvasClassName="example"
          params={{
            particles: {
              number: {
                value: 30,
              },
              size: {
                value: 2,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <div styleName="home-table">
          <div styleName="home-table-center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="text-white text-center">
                    <h1 styleName="header_iam" className="display-4">
                      I aaaam{" "}
                    </h1>
                    <h1 styleName="header_title">
                      <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                          "Jae Kim.",
                          4000,
                          "Developer.",
                          4000,
                          "Designer.",
                          4000,
                        ]}
                      />
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div styleName="social_bar">
        <ul styleName="social_home">
          <li className="list-inline-item">
            <a href="https://www.facebook.com/kjw9149">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.linkedin.com/in/jaeungkim0526">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://www.instagram.com/jaekiim/">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="list-inline-item">
            <a href="https://github.com/jaeungkim/">
              <i className="fa fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
      <div styleName="scroll_down">
        <Link
          className="scroll active nav-link"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <i className="fa fa-arrow-down text-white"></i>
        </Link>
      </div>
    </section>
  );
};
export default Profile;
