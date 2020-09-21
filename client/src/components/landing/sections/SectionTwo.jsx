import React from "react";
// import PropTypes from 'prop-types'

// components
import Offers from "components/landing/Offers";

// data
import { OFFERS } from "data/offers";

// svg
import { ReactComponent as Chef } from "assets/customer/svg/chef.svg";
import { Link } from "react-router-dom";
import { Button } from "components/common/Button";

const SectionTwo = (props) => {
  return (
    <div className="h-full lg:h-screen bg-orange-200">
      <div className="w-full flex items-center justify-center">
        <div className="sm:p-16 w-full lg:w-11/12 xl:w-9/12 lg:-mt-56 xl:-mt-48">
          <Offers offers={OFFERS} />
        </div>
      </div>
      <div className="flex-col md:flex md:flex-row md:items-center md:px-16 xl:px-32">
        <div className="p-8 sm:flex sm:justify-center">
          <Chef className="w-full h-full sm:w-1/2 sm:h-1/2 md:w-full md:h-full" />
        </div>
        <div className="px-8 sm:px-16 pb-8 text-center md:text-left">
          <h1 className="text-5xl xl:text-6xl">Be with us</h1>
          <h3 className="text-2xl xl:text-3xl">
            List your restaurant on our Food Delivery App
          </h3>
          <p className="py-2 sm:pt-8 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            tincidunt id diam non consectetur. Quisque pretium est sed sapien
            ultricies.
          </p>
          <p className="py-2 xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            tincidunt id diam non consectetur. Quisque pretium est sed sapien
            ultricies.
          </p>
          <Link className="inline-block my-3" to="/">
            <Button category="accent">
              <div className="text-primary text-2xl  uppercase">Get Started</div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

SectionTwo.propTypes = {};

export default SectionTwo;
