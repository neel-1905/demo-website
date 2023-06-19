import React from "react";
import { Cursor } from "react-creative-cursor";
import "./Contact.css";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { AwesomeButton } from "react-awesome-button";

const Contact = () => {
  return (
    <>
      <Cursor isGelly cursorSize={12} />
      <div>
        <div
          style={{ minHeight: "50vh" }}
          className="d-flex justify-content-center align-items-center contactMain"
        >
          <h2>We are here. Let's talk</h2>
        </div>
        <div style={{ minHeight: "50vh" }} className=" row">
          <div className="col-12 col-sm-6 col-md-4 text-center contact1"></div>
          <div className="col-12 col-sm-6 col-md-4  d-flex justify-content-center align-items-center flex-column  contact2">
            <div>
              <div className="py-3">
                <h3>Contact Us</h3>
              </div>

              <div>
                <p className="fs-5">
                  <i className="bi bi-telephone-fill"></i> +919876786543
                </p>
              </div>

              <div>
                <p className="fs-5">
                  <i className="bi bi-envelope-at"></i> company@gmail.com
                </p>
              </div>

              <div>
                <p className="fs-5">
                  <i className="bi bi-geo-alt-fill"></i> Company Name, Building,
                  City
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 text-center d-flex justify-content-center flex-column align-items-center contact3">
              <AwesomeButton type="primary">Primary</AwesomeButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
