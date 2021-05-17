import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
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
      <Container>
        <Row>
          <Col md className="justify-content-center">
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
          </Col>

          <Col md>
            <div>
              <p className="about_explanation">
                I am a dedicated software developer who graduated with computer
                science degree at the University of British Columbia.
                <br />
                <br />
                {/* When I was young, I loved playing with computers whether it
                  was just playing with pre-installed computer games like
                  Pinball or just browsing through internets. As I entered
                  University and got a chance to learn more about computers, I
                  absolutely fell in love with software engineering. I had
                  opportunities to develop in several areas but I found web
                  developing the most entertaining as I was not only able to
                  code but I was also able to design as well. Thus, during my
                  3rd and 4th year, I chose to focus mainly on web-dev projects
                  and worked on several eCommerce websites.
                  <br />
                  <br /> */}
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
                Canadian market, under license from Bittrex—the premier U.S.
                based blockchain trading platform. Our mission is to be Canada’s
                leading blockchain trading platform for virtual currencies and
                digital assets, while fostering a new generation of investors
                seeking to engage and manage their own financial future.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </div>
);
export default About;
