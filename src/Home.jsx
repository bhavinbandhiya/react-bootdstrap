import React from "react";
import Common from "./Common";
import web from "../src/image/1.svg";

const Home = () => {
  return (
    <>
         <Common
                name="Grow Your business with"
                imgsrc={web}
                visit="/service"
                btname="Get Started" />
        </>
  );
};

export default Home;
