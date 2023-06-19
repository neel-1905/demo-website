import React from "react";
import "./Navbar.css";
import { Cursor } from "react-creative-cursor";
import Sidebar from "../Sidebar";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  return (
    <>
      <Cursor isGelly cursorSize={12} />
      <Fade duration={1000}>
        <div className="container my-3">
          <div className="d-flex justify-content-between">
            <div className="fs-3 fw-bold">BRAND</div>
            <div className="d-flex justify-content-center">
              <button className="btn fw-bolder fs-5">lorem</button>
              {/* <button className=""></button> */}

              {/* OFF CANVAS */}
              <div
                className="d-flex align-items-center"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
                data-cursor-magnetic
                style={{ textAlign: "center" }}
              >
                <span className="fw-bolder fs-5">menu</span>
              </div>

              <Sidebar />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Navbar;
