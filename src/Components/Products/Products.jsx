import React, { useRef } from "react";
import { Cursor } from "react-creative-cursor";
import { motion } from "framer-motion";
import Flip from "react-reveal/Flip";
import { AwesomeButton } from "react-awesome-button";
import AnimatedScroll from "../AnimatedScroll/AnimatedScroll";

const Products = () => {
  const ref = useRef(null);

  return (
    <>
      <Cursor isGelly={true} cursorSize={12} />
      <div className="container">
        <div className="my-5">
          <h1 className="featuredHead">
            Similar <span className="txtOutline">Products</span>
          </h1>
        </div>
        {/* <div className="container">
          <div className="container text-center p-5">
            <Flip top duration={1000}>
              <div className="row">
                <div className="col-12 col-sm-6 col-md-4">
                  <motion.div
                    whileHover={{
                      scale: 0.9,
                    }}
                    className="card"
                  >
                    <img
                      src="https://images.freeimages.com/images/large-previews/a8d/shoe-1423560.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <motion.div
                    whileHover={{
                      scale: 0.9,
                    }}
                    className="card"
                  >
                    <img
                      src="https://1.bp.blogspot.com/-LH8MUH34BjQ/UraEufcwJSI/AAAAAAAAABw/0QcMqigUW28/s1600/619Y4XycJyL._SL1500_.jpg"
                      className="card-img-top"
                      alt="..."
                      style={{ height: "200px", width: "100%" }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="col-12 col-sm-6 col-md-4">
                  <motion.div
                    whileHover={{
                      scale: 0.9,
                    }}
                    className="card"
                  >
                    <img
                      src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Air-Jordan-Shoes-HD-Wallpaper.jpg"
                      className="card-img-top"
                      alt="..."
                      style={{ height: "200px", width: "100%" }}
                    />
                    <div className="card-body">
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </Flip>
          </div>
        </div> */}
        <AnimatedScroll />
      </div>
    </>
  );
};

export default Products;
