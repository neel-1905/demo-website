import React from "react";
import "./About.css";
import { Background, Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
// import Navbar from "../../Components/Navbar/Navbar";

const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Parallax
        className="section1"
        bgImage="https://wallpapercave.com/wp/3jQbonO.jpg"
        strength={200}
        // blur={5}
      >
        <div className="d-flex justify-content-center align-items-center flex-column text-white fw-bold section1Div">
          <Fade top>
            <h1>What We Do</h1>
          </Fade>
          <Fade bottom>
            <div className="w-50">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate deserunt magnam, placeat saepe rerum incidunt
                officiis exercitationem unde tempora autem sapiente odit
                reiciendis similique. Perspiciatis aliquid doloribus assumenda
                perferendis, molestiae porro, accusantium qui consequatur
                distinctio explicabo deserunt impedit possimus asperiores odio
                ea officiis iusto. Sequi aliquid commodi similique corporis
                explicabo sit nam molestias aspernatur illum voluptates amet
                architecto libero quibusdam et, itaque voluptatum doloremque
                quidem quis adipisci quo aliquam cum, rerum accusantium? Dolorem
                facere illo aspernatur, earum modi quae ipsum odio pariatur unde
                ipsam impedit natus animi recusandae, delectus vel nisi
                asperiores rerum quibusdam odit iste amet, corrupti eum.
                Obcaecati.
              </p>
            </div>
          </Fade>
        </div>
      </Parallax>

      <Parallax
        strength={300}
        className="section2"
        bgImage="https://avante.biz/wp-content/uploads/Background-Images-For-Websites/Background-Images-For-Websites-001.jpg"
      >
        <div className="container d-flex justify-content-center align-items-center section2Div">
          <div className="container text-center">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 column-gap-2">
                <div className="card">
                  <img
                    src="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?pid=ImgDet&rs=1"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Person 1</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="card">
                  <img
                    src="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?pid=ImgDet&rs=1"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Person 1</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <div className="card">
                  <img
                    src="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?pid=ImgDet&rs=1"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Person 1</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default About;
