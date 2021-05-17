import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import catalyxLogo from "../../assets/images/catalyx_web.png";
import fastbitcashLogo from "../../assets/images/fbc_web.png";
import "./local.scss";

const Project=()=> {
    return (
      <div className="grey_background">
        <section className="custom_section" id="project">
          <div className="text-center">
            <h1 className="title">Projects</h1>
          </div>
          <Container>
            <Row className="justify-content-md-center">
              <Col sm>
              <p>Catalyx</p>
                <div className="project_card">
                  <a href="https://catalyx.io" rel="noopener noreferrer" target="_blank">
                    <img
                      className="img-fluid rounded"
                      src={catalyxLogo}
                      alt=""
                    />
                  </a>
                </div>
              </Col>
              <Col sm>
              <p>FastBitCash</p>
                <div className="project_card">
                  <a href="https://fastbitcash.ca" rel="noopener noreferrer" target="_blank">
                    <img
                      className="img-fluid rounded"
                      src={fastbitcashLogo}
                      alt=""
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="text-center">
            <h1 className="title">Git Projects</h1>
          </div>
          <Container>
            <Row className="justify-content-md-center">
              <Col sm>
                <div className="github_card">
                  <a href="https://github.com/jaeungkim/Portfolio" rel="noopener noreferrer" target="_blank">
                    <img
                      className="img-fluid rounded"
                      src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/Portfolio.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="github_card">
                  <a href="https://github.com/jaeungkim/Resume" rel="noopener noreferrer" target="_blank">
                    <img
                      className="img-fluid rounded"
                      src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/Resume.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="github_card">
                  <a href="https://github.com/jaeungkim/CaffeineHolic" rel="noopener noreferrer" target="_blank">
                    <img
                      className="img-fluid rounded"
                      src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/CaffeineHolic.png"
                      alt=""
                    />
                  </a>
                </div>
              </Col>
              <Col sm>
                <div className="github_card">
                  <a href="https://github.com/jaeungkim/Lental" rel="noopener noreferrer" target="_blank">
                    <img
                      className="img-fluid rounded"
                      src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/Lental.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="github_card">
                  <a href="https://github.com/jaeungkim/ChatBot" rel="noopener noreferrer" target="_blank">
                    <img
                      className="img-fluid rounded"
                      src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/ChatBot.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="github_card">
                  <a href="https://github.com/jaeungkim/COSC419" rel="noopener noreferrer" target="_blank">
                    <img
                      className="img-fluid rounded"
                      src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/jaeungkim/COSC419.png"
                      alt=""
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
export default Project;
