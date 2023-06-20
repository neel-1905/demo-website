import React from "react";
import "./animated.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "./animated.css";

const AnimatedScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: true,
        pinSpacing: true,
        start: "left-=120px left",
        end: "+=2000",
        scrub: 1,
      },
    });

    tl.addLabel("card1");
    tl.to(".card1", {
      xPercent: 0,
      opacity: 1,
    });

    tl.from(".card2", {
      xPercent: 75,
      opacity: 0,
    });
    tl.addLabel(".card2");

    tl.to(
      ".card1",
      {
        scale: 0.95,
        xPercent: -0.5,
        opacity: 0.5,
      },
      "-=0.3"
    );

    tl.to(".card2", {
      xPercent: 0,
      opacity: 1,
    });

    tl.from(".card3", {
      xPercent: 75,
      opacity: 0,
    });
    tl.addLabel(".card3");

    tl.to(
      ".card2",
      {
        scale: 0.98,
        xPercent: -0.4,
        opacity: 0.6,
      },
      "-=0.3"
    );
  }, []);

  return (
    <>
      <div className="cards">
        <div className="carda card1 d-flex">
          <div className="cardContent">
            <div style={{ flex: 2 }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                quam libero, aperiam numquam laudantium earum beatae eos
                inventore odit delectus?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nam, voluptatem.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <img
                style={{ width: "100%" }}
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="carda card2">02</div>
        <div className="carda card3">03</div>
      </div>
    </>
  );
};

export default AnimatedScroll;
