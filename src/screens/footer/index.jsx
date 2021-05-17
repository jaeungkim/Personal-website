import React from "react";
import "./local.scss";

const Footer = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row pt-4 pb-4">
          <div className="col-lg-12">
            <div className="float-left float_none mt-2 mb-2">
              <p className="copy-rights text-muted mb-0">2021 &copy; Jae Kim</p>
            </div>
            <div className="float-right float_none mt-2 mb-2">
              <ul className="list-inline fot_social mb-0">
                <li className="list-inline-item">
                  <a
                    href="https://www.facebook.com/kjw9149"
                    className="social-icon text-muted"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.linkedin.com/in/jaeungkim0526/"
                    className="social-icon text-muted"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.instagram.com/jaekiim/"
                    className="social-icon text-muted"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://www.github.com/jaeungkim/"
                    className="social-icon text-muted"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
