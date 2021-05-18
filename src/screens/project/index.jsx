import React from "react";
import catalyxLogo from "../../assets/images/catalyx_web.png";
import fastbitcashLogo from "../../assets/images/fbc_web.png";
import foodverifyLogo from "../../assets/images/foodverify_web.png";
import "./local.scss";

const Project = () => {
  return (
    <div className="grey_background">
      <section className="custom_section" id="project">
        <div className="text-center">
          <h1 className="title">Projects</h1>
        </div>
        <div className="container">
          <div className="row">

            {/* Catalyx */}
            <div className="col-12 col-lg-6">
              <p className="project_title">Catalyx</p>
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
            {/* Catalyx */}

            {/* FastBitCash */}
            <div className="col-12 col-lg-6">
              <p className="project_title">FastBitCash</p>
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
            {/* FastBitCash */}

            {/* FoodVerify */}
            {/* <div className="col-12 col-lg-4">
              <p className="project_title">FoodVerify</p>
              <div className="project_card">
                <a
                  href="http://foodverify.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="img-fluid rounded"
                    src={foodverifyLogo}
                    alt=""
                  />
                </a>
              </div>
            </div> */}
            {/* FoodVerify */}

          </div>
        </div>
      </section>
    </div>
  );
};
export default Project;
