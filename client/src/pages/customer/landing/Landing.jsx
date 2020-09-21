import React from "react";
// import PropTypes from 'prop-types'

// components
import SectionOne from "components/landing/sections/SectionOne";
import SectionTwo from "components/landing/sections/SectionTwo";
import SectionThree from "components/landing/sections/SectionThree";
import SectionFour from "components/landing/sections/SectionFour";
import SectionFive from "components/landing/sections/SectionFive";
import Footer from "components/landing/sections/Footer";

const Landing = (props) => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
      {/* <div className="bg-pink-500 xs:bg-blue-400 sm:bg-purple-400 md:bg-green-500 lg:bg-orange-400 xl:bg-indigo-400">
        breakpoint-(pink-default//blue-xs//purple-sm//green-md//lg-orange//xl-indigo)
      </div> */}
    </>
  );
};

Landing.propTypes = {};

export default Landing;
