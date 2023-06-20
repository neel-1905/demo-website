import React from "react";
import "./Header.css";
import { Cursor } from "react-creative-cursor";
import ecom1 from "../../images/ecommerce1.gif";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";
import gsap from "gsap";

const Header = () => {
  gsap.to(".layer", {
    yPercent: -100,
    stagger: 0.25,
    ease: "expo.inOut",
    scrollTrigger: {
      trigger: ".overlay",
      pin: true,
      scrub: true,
      start: "top top",
      end: "+=100%",
      //markers: true
    },
  });

  return (
    <>
      <Cursor isGelly cursorSize={12} />
      <header>
        <div className="container py-5">
          <p className="fs-5 ms-5">We make it happen</p>
          <div className="container text-center">
            <div className="row">
              <motion.div
                initial={{
                  x: -900,
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="col-12 col-sm-12 col-md-4"
              >
                <h1 className="headerCol">Website</h1>
              </motion.div>

              <motion.div
                initial={{
                  y: -900,
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="col-12 col-sm-12 col-md-4"
              >
                <h1 className="headerCol">Apps</h1>
              </motion.div>

              <motion.div
                initial={{
                  x: 900,
                }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: 1,
                }}
                className="col-12 col-sm-12 col-md-4"
              >
                <h1 className="headerCol">Branding</h1>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-5 container w-75">
          <p className="text-justify headerTxt text-uppercase fw-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            hic error voluptatibus nisi, repellendus consequatur. Cupiditate
            amet officiis eligendi. Molestiae.
          </p>
        </div>

        <div class="overlay">
          <div class="layer animatex"></div>
          <div class="layer animatey">
            <div class="layer-heading">
              <h1 class="text-white">ScrollTrigger Overlay</h1>
            </div>
          </div>
          <div class="layer animatez"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
