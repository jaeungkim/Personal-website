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
      <div className="container">
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
            <p className="about_explanation">
              Hello! My name is Jae, and I am a dedicated software developer who
              graduated from the University of British Columbia with BSc in
              Computer Science.
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
              as a full stack developer. Catalyx is a blockchain trading
              platform customized for the virtual currencies and digital assets.
              Our mission is to be the leader in the Canadian digital asset
              market space by providing Canadian customers a reliable, fast and
              secure trading platform with access to some of the world's most
              innovative blockchain projects, and the most extensive selection
              of digital tokens in Canada.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default About;
