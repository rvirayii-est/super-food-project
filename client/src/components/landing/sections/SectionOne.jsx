import React from "react";
// import PropTypes from 'prop-types'

// image
import headerHero from "assets/customer/landing/header-hero.webp";

// components
import AddressSearch from "components/common/AddressSearch";

const SectionOne = (props) => {
  return (
    <div className="relative flex flex-col md:flex-row justify-center md:items-center md:justify-start h-screen">
      <div className="md:max-w-xl xl:max-w-full md:ml-16 md:-mt-16 lg:ml-32 xl:ml-64 xl:-mt-16">
        <div className="text-primary m-4 -mt-24 md:mt-0 mb-12">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl">Why starve when you have us</h1>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl">We have all the foods you crave</h2>
        </div>

        <div className="">
          <AddressSearch />
        </div>
      </div>



      <div className="absolute right-0 -z-1">
        <img
          src={headerHero}
          alt="header hero"
          className="opacity-25 object-cover h-full w-full"
        />
      </div>
    </div>
  );
};

SectionOne.propTypes = {};

export default SectionOne;
