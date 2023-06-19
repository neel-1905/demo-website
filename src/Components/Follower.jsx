import React, { useRef } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";

MouseFollower.registerGSAP(gsap);

export const cursor = new MouseFollower();
const Follower = () => {
  return <></>;
};

export default Follower;
