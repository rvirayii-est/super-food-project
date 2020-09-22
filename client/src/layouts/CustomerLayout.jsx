import React from "react";
// import PropTypes from 'prop-types'

// components
import Navbar from "components/navbar/Navbar";

const CustomerLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-20">

      {children}
      </div>
    </div>
  );
};

CustomerLayout.propTypes = {};

export default CustomerLayout;
