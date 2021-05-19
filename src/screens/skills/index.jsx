import React from "react";
import { Tab, Tabs, ProgressBar, Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import javascriptIcon from "@iconify/icons-logos/javascript";
import fileTypeCss from "@iconify/icons-vscode-icons/file-type-css";
import html5 from "@iconify/icons-logos/html-5";
import fileTypeReactts from "@iconify/icons-vscode-icons/file-type-reactts";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import phpIcon from "@iconify/icons-logos/php";
import mysqlIcon from "@iconify/icons-logos/mysql";
import angularIcon from "@iconify/icons-logos/angular-icon";
import apolloIcon from "@iconify/icons-logos/apollostack";
import graphQL from "@iconify/icons-logos/graphql";
import elixrIcon from "../../assets/images/elixir.svg";
import profileIllustrationimg from "../../assets/images/profile_illustration.png";
import mongoDBIcon from "@iconify/icons-logos/mongodb";
import meteorIcon from "@iconify/icons-logos/meteor-icon";
import postgreSQL from "@iconify/icons-logos/postgresql";
import docker from "@iconify/icons-logos/docker";
import "./local.scss";

const Skills = () => {
  return (
    <div className="white_background">
      <section className="custom_section" id="skill">
        <div className="text-center">
          <h1 className="title">What I Do</h1>
        </div>
        <Container>
          <Row>
            <Col md>
              <Container>
                <img
                  className="ill_image"
                  src={profileIllustrationimg}
                  alt=""
                ></img>
              </Container>
            </Col>
            <Col md>
              <Container>
                <Tabs
                  className="mt-2 mb-2 myClass justify-content-center text-center"
                  defaultActiveKey="frontend"
                >
                  <Tab eventKey="frontend" title="Front-End">
                    <div className="dev-icons">
                      <h4 className="skill-name">
                        Html <Icon icon={html5} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">
                        Css <Icon icon={fileTypeCss} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">
                        JavaScript <Icon icon={javascriptIcon} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">
                        React <Icon icon={fileTypeReactts} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">
                        Angular <Icon icon={angularIcon} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>
                  </Tab>

                  <Tab eventKey="backend" title="Back-End">
                    <div className="dev-icons">
                      <h4 className="skill-name">
                        PHP <Icon icon={phpIcon} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">
                        NodeJs <Icon icon={nodejsIcon} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">
                        Elixir <img src={elixrIcon} className="elixirIcon" />
                      </h4>
                      <ProgressBar striped variant="info" animated now={60} />
                    </div>
                  </Tab>

                  <Tab eventKey="database" title="Database">
                    <div className="dev-icons">
                      <h4 className="skill-name">
                        MySQL <Icon icon={mysqlIcon} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>
                    <div className="dev-icons">
                      <h4 className="skill-name">
                        PostgreSQL <Icon icon={postgreSQL} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>
                    <div className="dev-icons">
                      <h4 className="skill-name">
                        MongoDB <Icon icon={mongoDBIcon} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={60} />
                    </div>
                  </Tab>
                  <Tab eventKey="others" title="Others">
                    <div className="dev-icons">
                      <h4 className="skill-name">
                        Apollo <Icon icon={apolloIcon} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">
                        GraphQL <Icon icon={graphQL} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>
                    <div className="dev-icons">
                      <h4 className="skill-name">
                        Docker <Icon icon={docker} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>

                    <div className="dev-icons">
                      <h4 className="skill-name">
                        Meteor <Icon icon={meteorIcon} />
                      </h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>
                  </Tab>
                </Tabs>
              </Container>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
export default Skills;
