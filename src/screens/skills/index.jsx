import React from "react";
import { Tab, Tabs, ProgressBar, Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import java from "@iconify/icons-logos/java";
import fileTypeReactts from "@iconify/icons-vscode-icons/file-type-reactts";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import phpIcon from "@iconify/icons-logos/php";
import mysqlIcon from "@iconify/icons-logos/mysql";
import angularIcon from "@iconify/icons-logos/angular-icon";
import python from "@iconify/icons-logos/python";
import graphQL from "@iconify/icons-logos/graphql";
import profileIllustrationimg from "../../assets/images/profile_illustration.png";
import postgreSQL from "@iconify/icons-logos/postgresql";
import docker from "@iconify/icons-logos/docker-icon";
import redux from "@iconify/icons-logos/redux";
import jest from "@iconify/icons-logos/jest";
import sass from "@iconify/icons-logos/sass";
import aws from "@iconify/icons-logos/aws";
import awsec2 from "@iconify/icons-logos/aws-ec2";
import awslambda from "@iconify/icons-logos/aws-lambda";
import awscloudformation from "@iconify/icons-logos/aws-cloudformation";
import awss3 from "@iconify/icons-logos/aws-s3";
import awsamplify from "@iconify/icons-logos/aws-amplify";
import git from "@iconify/icons-logos/git-icon";
import github from "@iconify/icons-logos/github-icon";
import gitlab from "@iconify/icons-logos/gitlab";
import jira from "@iconify/icons-logos/jira";
import confluence from "@iconify/icons-logos/confluence";
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
                  styleName="ill_image"
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
                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={fileTypeReactts} styleName="skills_icons" />
                        React
                      </h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={redux} styleName="skills_icons" />
                        Redux
                      </h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={graphQL} styleName="skills_icons" />
                        GraphQL
                      </h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={sass} styleName="skills_icons" />
                        Sass
                      </h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={jest} styleName="skills_icons" />
                        Jest
                      </h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        {" "}
                        <Icon icon={angularIcon} styleName="skills_icons" />
                        Angular
                      </h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>
                  </Tab>

                  <Tab eventKey="backend" title="Back-End">
                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        {" "}
                        <Icon icon={nodejsIcon} styleName="skills_icons" />
                        NodeJs
                      </h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>
                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={phpIcon} styleName="skills_icons" />
                        PHP
                      </h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>
                  </Tab>

                  <Tab eventKey="database" title="Databases">
                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={mysqlIcon} styleName="skills_icons" />
                        MySQL
                      </h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>
                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        {" "}
                        <Icon icon={postgreSQL} styleName="skills_icons" />
                        PostgreSQL
                      </h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>
                  </Tab>

                  <Tab eventKey="devops" title="DevOps">
                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={aws} styleName="skills_icons" />
                        AWS
                      </h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={awsec2} styleName="skills_icons" />
                        EC2
                      </h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={awss3} styleName="skills_icons" />
                        S3
                      </h4>
                      <ProgressBar striped variant="info" animated now={80} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={awslambda} styleName="skills_icons" />
                        Lambda
                      </h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon
                          icon={awscloudformation}
                          styleName="skills_icons"
                        />
                        CloudFormation
                      </h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={awsamplify} styleName="skills_icons" />
                        Amplify
                      </h4>
                      <ProgressBar striped variant="info" animated now={70} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={docker} styleName="skills_icons" />
                        Docker
                      </h4>
                      <ProgressBar striped variant="info" animated now={60} />
                    </div>
                  </Tab>

                  <Tab eventKey="management" title="Project Management">
                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={git} styleName="skills_icons" />
                        Git
                      </h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={github} styleName="skills_icons" />
                        GitHub
                      </h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={gitlab} styleName="skills_icons" />
                        GitLab
                      </h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={jira} styleName="skills_icons" />
                        Jira
                      </h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={confluence} styleName="skills_icons" />
                        Confluence
                      </h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>
                  </Tab>

                  <Tab eventKey="language" title="Languages">
                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={java} styleName="skills_icons" />
                        Java
                      </h4>
                      <ProgressBar striped variant="info" animated now={90} />
                    </div>

                    <div styleName="dev-icons">
                      <h4 styleName="skill-name">
                        <Icon icon={python} styleName="skills_icons" />
                        Python
                      </h4>
                      <ProgressBar striped variant="info" animated now={80} />
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
