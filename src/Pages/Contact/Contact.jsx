import React from "react";
import { Cursor } from "react-creative-cursor";
import "./Contact.css";
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { AwesomeButton } from "react-awesome-button";
import Particles from "react-tsparticles";
import particlesConfig from "../../Components/particlesConfig";

const Contact = () => {
  return (
    <>
      <Cursor isGelly cursorSize={12} />
      <div>
        <div
          style={{ minHeight: "50vh" }}
          className="d-flex justify-content-center align-items-end contactMain"
        >
          <h2 className="text-dark">We are here. Let's talk</h2>
        </div>
        <div style={{ minHeight: "50vh" }} className=" row">
          <div className="col-12 col-sm-6 col-md-4 text-center contact1"></div>
          <div
            className=" bg-dark-subtle col-12 col-sm-6 col-md-4  d-flex justify-content-center align-items-center flex-column  contact2"
            data-cursor-text="Give Us A Call"
            data-cursor-size="80px"
          >
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
          </div>
          <div
            className="bg-info-subtle col-12 col-sm-6 col-md-4 text-center d-flex justify-content-center flex-column align-items-center contact3"
            data-cursor-text="Message Us"
            data-cursor-size="80px"
            // data-cursor-exclusion
          >
            <div>
              <div className="py-3">
                <h3>Follow Us On Social Media</h3>
              </div>
              <p className="fs-5">
                <i class="bi bi-facebook"></i> www.facebook.com
              </p>
              <p className="fs-5">
                <i class="bi bi-instagram"></i> www.instagram.com
              </p>
              <p className="fs-5">
                <i class="bi bi-twitter"></i> www.twitter.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
