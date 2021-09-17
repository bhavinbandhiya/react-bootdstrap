import React from 'react';
import Common from "./Common";
import web from "../src/image/2.svg";

const About = () => {
    return (
        <>
            <Common
                name="Welcome to About Page"
                imgsrc={web}
                visit="/contact"
                btname="Contact Now" />
        </>
    );
};

export default About;
