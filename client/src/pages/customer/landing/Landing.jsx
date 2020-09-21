import React from "react";
// import PropTypes from 'prop-types'

// components
import SectionOne from "components/landing/sections/SectionOne";
import SectionTwo from "components/landing/sections/SectionTwo";
import SectionThree from "components/landing/sections/SectionThree";

const Landing = (props) => {
  return (
    <>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

Landing.propTypes = {};

export default Landing;
