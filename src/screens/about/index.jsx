import React from "react";
import { Carousel } from "react-bootstrap";
import "./local.scss";
import profileImg1 from "../../assets/images/profile_1.png";
import profileImg2 from "../../assets/images/profile_2.png";
import profileImg3 from "../../assets/images/profile_3.png";
import profileImg4 from "../../assets/images/profile_4.png";

const About = () => (
  <div className="white_background">
    <section className="custom_section" id="about">
      <div className="text-center">
        <h1 className="title">About me</h1>
      </div>
      <div className="row">
        <div className="col-12 col-md-6">
          <Carousel className="profile_img_div">
            <Carousel.Item>
              <img
                className="profile_img d-block w-100"
                src={profileImg1}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="profile_img d-block w-100"
                src={profileImg2}
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="profile_img d-block w-100"
                src={profileImg3}
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="profile_img d-block w-100"
                src={profileImg4}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="col-12 col-md-6">
          <div>
            <p className="about_explanation">
              I am a dedicated software developer who graduated with computer
              science degree at the University of British Columbia.
              <br />
              <br />
              Currently, I am working for
              <span>
                <a
                  className="catalyx_link"
                  href="https://catalyx.io/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  catalyx.io{" "}
                </a>
              </span>
              as a software developer, but mostly working as a full stack web
              developer. Catalyx is a trading platform customized for the
              Canadian market, under license from Bittrex—the premier U.S. based
              blockchain trading platform. Our mission is to be Canada’s leading
              blockchain trading platform for virtual currencies and digital
              assets, while fostering a new generation of investors seeking to
              engage and manage their own financial future.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default About;
