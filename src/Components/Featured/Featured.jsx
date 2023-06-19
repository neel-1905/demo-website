import React, { useEffect } from "react";
import "./Featured.css";
import { motion, AnimatePresence } from "framer-motion";
import LightSpeed from "react-reveal/LightSpeed";
import Fade from "react-reveal/Fade";

// import Jello from "react-reveal/Jello";

const Featured = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="featuredHead">
            Featured <span className="txtOutline">Products</span>
          </h1>
        </div>
        <div className="container my-5 ">
          <Fade cascade top duration={1500}>
            <div className="row content ">
              <div className="col-sm-7 order-2 order-sm-1 d-flex justify-content-center flex-column text-justify desc">
                <div>Hello</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  officiis repellat obcaecati facilis, rem voluptatem nam ipsam
                  consequatur cumque reiciendis, laudantium animi dolorum quam
                  omnis ducimus similique, molestias voluptatibus provident.
                  Labore vitae commodi eaque repellendus accusamus repellat ut
                  sed exercitationem officia deleniti, sit ab modi quo
                  repudiandae consectetur. Molestiae, voluptate!
                </div>
              </div>

              <div className="col-sm-5 order-1 order-sm-2">
                <img
                  style={{ width: "100%" }}
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                  alt=""
                />
              </div>
            </div>

            <div className="row content ">
              <div className="col-sm-7 order-2 order-sm-1 d-flex justify-content-center flex-column text-justify desc">
                <div>Hello</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  officiis repellat obcaecati facilis, rem voluptatem nam ipsam
                  consequatur cumque reiciendis, laudantium animi dolorum quam
                  omnis ducimus similique, molestias voluptatibus provident.
                  Labore vitae commodi eaque repellendus accusamus repellat ut
                  sed exercitationem officia deleniti, sit ab modi quo
                  repudiandae consectetur. Molestiae, voluptate!
                </div>
              </div>

              <div className="col-sm-5 order-1 order-sm-2">
                <img
                  style={{ width: "100%" }}
                  src="https://wallpapercave.com/wp/wp2896922.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="row content ">
              <div className="col-sm-7 order-2 order-sm-1 d-flex justify-content-center flex-column text-justify desc">
                <div>Hello</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  officiis repellat obcaecati facilis, rem voluptatem nam ipsam
                  consequatur cumque reiciendis, laudantium animi dolorum quam
                  omnis ducimus similique, molestias voluptatibus provident.
                  Labore vitae commodi eaque repellendus accusamus repellat ut
                  sed exercitationem officia deleniti, sit ab modi quo
                  repudiandae consectetur. Molestiae, voluptate!
                </div>
              </div>

              <div className="col-sm-5 order-1 order-sm-2">
                <img
                  style={{ width: "100%" }}
                  src="http://www.pixelstalk.net/wp-content/uploads/2016/05/Photos-Download-Adidas-Shoes-Wallpapers-HD.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="row content ">
              <div className="col-sm-7 order-2 order-sm-1 d-flex justify-content-center flex-column text-justify desc">
                <div>Hello</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius
                  officiis repellat obcaecati facilis, rem voluptatem nam ipsam
                  consequatur cumque reiciendis, laudantium animi dolorum quam
                  omnis ducimus similique, molestias voluptatibus provident.
                  Labore vitae commodi eaque repellendus accusamus repellat ut
                  sed exercitationem officia deleniti, sit ab modi quo
                  repudiandae consectetur. Molestiae, voluptate!
                </div>
              </div>

              <div className="col-sm-5 order-1 order-sm-2">
                <img
                  style={{ width: "100%" }}
                  src="https://guhaha.com/wp-content/uploads/2020/06/He5f00c726d3745e7bdd33fca39d3cea9m-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Featured;
