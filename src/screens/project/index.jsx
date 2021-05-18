import React from "react";
import { Row, Col } from "react-bootstrap";
import catalyxLogo from "../../assets/images/catalyx_web.png";
import fastbitcashLogo from "../../assets/images/fbc_web.png";
import "./local.scss";

const Project = () => {
  return (
    <div className="grey_background">
      <section className="custom_section" id="project">
        <div className="text-center">
          <h1 className="title">Projects</h1>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12">
              <p>Catalyx</p>
              <div className="project_card">
                <a
                  href="https://catalyx.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img className="img-fluid rounded" src={catalyxLogo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-12">
              <p>FastBitCash</p>
              <div className="project_card">
                <a
                  href="https://fastbitcash.ca"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="img-fluid rounded"
                    src={fastbitcashLogo}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Project;
