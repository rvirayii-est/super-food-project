import React from "react";
// import PropTypes from 'prop-types'

// icon
import { Icon } from "@iconify/react";

const Offers = ({ offers }) => {
  return (
    <div className="flex flex-wrap text-primary bg-white shadow-custom rounded-lg  text-center">
      {/* flex-col justify-center items-center */}
      {offers.map(offer => {
        const { id, title, icon, description } = offer;
        return (
          <div key={id} className="py-16 xl:py-8 w-full sm:w-1/2 lg:w-1/4 mx-16 sm:mx-0 sm:px-4 xl:px-12">
            {/* mx-10 sm:mx-16 */}
            <div className="flex items-center justify-center mx-4">

            <Icon icon={icon} className="w-20 h-20" />
            </div>
            <h2 className="text-3xl">
            {title}
            </h2>
            <div className="text-base">
              {description}
            </div>
          </div>
        )
      })}
    </div>
  );
};

Offers.propTypes = {};

export default Offers;
