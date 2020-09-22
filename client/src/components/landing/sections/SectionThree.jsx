import React from "react";
// import PropTypes from "prop-types";
import LandingImage from "components/common/images/LandingImage";
import { LANDING_FOOD_OFFERS } from "data/landing-food-offers";

const SectionThree = (props) => {
  return (
    <div className="h-full p-8">
      <div className=" text-center flex-col justify-center items-center">
        <div className="text-4xl xl:text-5xl font-medium">
          A Moments of Delivered on Time
        </div>
        <div className="text-2xl xl:text-3xl md:px-12 xl:px-64 mt-8">
          Never miss a moment with your family and have your orders delivered
          right in front of your doorstep. Food delivery is now available in
          areas of Metro Manila, Bicol, Cebu and will be quickly expanding to
          other areas soon.
        </div>
      </div>
      <div className="my-6 mt-16 flex flex-col justify-center items-center">
        <div className="w-full md:w-3/4 lg:w-1/2">
          {LANDING_FOOD_OFFERS.map((offer) => (
            <LandingImage key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </div>
  );
};

SectionThree.propTypes = {};

export default SectionThree;
