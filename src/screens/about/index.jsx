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
            <Carousel styleName="profile_img_div" indicators={false}>
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

          <div className="col-12 col-md-6 my-auto">
            <p styleName="about_explanation">
              Hello &#128075; Welcome to my webiste!
              <br />
              <br />
              My name is Jae Woong, but I usually go by the name Jae.
              <br />
              <br />
              When I was young, I always loved playing with legos. When I
              finished building them I always loved the joy they brought. Just
              staring at them made me happy. I guess from that point on, I
              always enjoyed solving and building things. (I still collect lego
              by the way.) And while studying at the
              <span>
                <a
                  styleName="ubc_link"
                  href="https://www.ubc.ca/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  University of British Columbia{" "}
                </a>
              </span>
              , I knew computer science was something that I had to go for. In
              fact, I quickly fell in love with web development as it allowed me
              to not only write code but also design as well.
              {/* This was very exciting to me as I always
              found designing essential. For example, while working for Catalyx,
              I noticed that UI/UX was extremly important as users are reluctant
              to use the service just based off of design. */}
              <br />
              <br />
              Currently, I am Front End Developer for
              <span>
                <a
                  styleName="catalyx_link"
                  href="https://catalyx.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Catalyx.io{" "}
                </a>
              </span>
              in Vancouver, BC. Catalyx is Canada's largest cryptocurrency
              trading platforms. Here at Catalyx, I work with entrepreneurs to
              build a blockchain powered web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
);
export default About;
