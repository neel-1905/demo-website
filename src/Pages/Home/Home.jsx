import React, { useEffect, useRef } from "react";
import { Cursor } from "react-creative-cursor";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Featured from "../../Components/Featured/Featured";
import Products from "../../Components/Products/Products";

const Home = () => {
  return (
    <>
      <Cursor isGelly cursorSize={12} />
      <Navbar />

      <div style={{ height: "100vh" }}>
        <Header />
      </div>

      <section>
        <Featured />
      </section>

      <section>
        <Products />
      </section>
    </>
  );
};

export default Home;
