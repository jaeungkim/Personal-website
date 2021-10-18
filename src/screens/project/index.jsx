import React from "react";
import catalyxLogo from "../../assets/images/catalyxWebPage.png";
import fastbitcashLogo from "../../assets/images/fastbitcashWeb.png";
import foodverifyLogo from "../../assets/images/foodverifyWeb.png";
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
            <div className="col-12">
              <p styleName="card_title">Catalyx</p>
              <div styleName="project_card">
                <img alt="" src={catalyxLogo} styleName="project_webImage" />
                <div styleName="project_explanation_div">
                  <p styleName="project_explanation">
                    Blockchain powered Canadian cryptocurrency trading platform
                  </p>
                  <a href="https://catalyx.io" styleName="card_linktopage" target="_blank">Link</a>
                </div>
              </div>
            </div>
            {/* Catalyx */}

            {/* FastBitCash */}
            <div className="col-12">
              <p styleName="card_title">FastBitCash</p>
              <div styleName="project_card">
                <img
                  alt=""
                  src={fastbitcashLogo}
                  styleName="project_webImage"
                />
                <div styleName="project_explanation_div">
                <p styleName="project_explanation">
                  User friendly cryptocurrency platform for beginners - powered
                  by Catalyx.io
                </p>
                <a href="https://fastbitcash.ca" styleName="card_linktopage" target="_blank">Link</a>
                </div>
              </div>
            </div>
            {/* FastBitCash */}

            {/* FoodVerify */}
            <div className="col-12">
              <p styleName="card_title">FoodVerify.io</p>
              <div styleName="project_card">
                <img alt="" src={foodverifyLogo} styleName="project_webImage" />
                <div styleName="project_explanation_div">
                <p styleName="project_explanation">
                  Food Traceability project for Inno Foods Inc.
                </p>
                <a href="https://foodverify.io" styleName="card_linktopage" target="_blank">Link</a>
                </div>
              </div>
            </div>
            {/* FoodVerify */}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Project;
