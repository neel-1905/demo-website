import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul
            className="list-group list-group-flush"
            style={{ listStyle: "none" }}
          >
            {/* <div className="list-group-item fs-4 fw-semibold"> */}
            <li className="list-group-item fs-4 fw-semibold" id="home">
              <Link className="text-decoration-none text-dark" to={`/`}>
                Home
              </Link>
            </li>
            {/* </div> */}
            <li className="list-group-item fs-4 fw-semibold ">
              <Link className="text-decoration-none text-dark" to={`/about`}>
                About
              </Link>
            </li>
            <div className="list-group-item fs-4 fw-semibold">
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  to={`/contact`}
                >
                  Contact
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
