import React from "react";
// import PropTypes from 'prop-types'

// components
import SectionOne from "components/landing/sections/SectionOne";
import SectionTwo from "components/landing/sections/SectionTwo";
import SectionThree from "components/landing/sections/SectionThree";
import SectionFour from "components/landing/sections/SectionFour";

const Landing = (props) => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
};

Landing.propTypes = {};

export default Landing;
