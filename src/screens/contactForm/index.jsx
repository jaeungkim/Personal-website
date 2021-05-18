import React, { useState } from "react";
import "./local.scss";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const submitForm = (ev) => {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("FAIL");
      }
    };
    xhr.send(data);
  };
  return (
    <div className="white_background">
      <section className="custom_section" id="contact">
        <div className="text-center">
          <h1> Contact Me</h1>
        </div>
        <div className="justify-content-center text-left">
          <div className="row">
            <form
              onSubmit={submitForm}
              action="https://formspree.io/xayprage"
              method="POST"
              className="pt-2 contact_form"
            >
              <div className="col-lg">
                <div className="form-group mt-2">
                  <label htmlFor="name" className="font-weight-bold">
                    {" "}
                    Name{" "}
                  </label>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Your name..."
                  />
                </div>
              </div>

              <div className="col-lg">
                <div className="form-group mt-2">
                  <label htmlFor="email" className="font-weight-bold">
                    {" "}
                    Email address{" "}
                  </label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Your email..."
                  />
                </div>
              </div>
              <div className="col-lg">
                <div className="form-group mt-2">
                  <label htmlFor="comments" className="font-weight-bold">
                    {" "}
                    Message{" "}
                  </label>
                  <textarea
                    name="comments"
                    id="comments"
                    rows="4"
                    className="form-control"
                    placeholder="Your message..."
                  ></textarea>
                </div>
              </div>
              <div className="col-lg text-right">
                {status === "SUCCESS" ? (
                  <p className="success_message">
                    Your message has beent sent!
                  </p>
                ) : (
                  ""
                )}
                {status === "FAIL" ? (
                  <p className="error_message">
                    Oops! Try again! Make sure you entered info correctly
                  </p>
                ) : (
                  ""
                )}
                <input
                  type="submit"
                  id="submit"
                  name="send"
                  className="btn btn-custom"
                  value="Send Message"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
