import React from "react";
// import PropTypes from "prop-types";
import { Button } from "components/common/buttons/Button";
import { Link } from "react-router-dom";

// icon
import { Icon } from "@iconify/react";
import bxlApple from "@iconify/icons-bx/bxl-apple";
import bxlPlayStore from "@iconify/icons-bx/bxl-play-store";

const SectionFour = (props) => {
  return (
    <div className="bg-gray-200 p-12 flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-medium">Download the food app you love.</h2>
      <h4 className="text-xl md:text-2xl text-gray-600 my-4">
        Food app in your pocket. Find the best food to suit your cravings. Go
        ahead, download now.
      </h4>
      <div className="flex-col sm:flex sm:flex-row sm:space-x-2 md:space-x-8">
        <Link className="inline-block" to="/">
          <Button bgColor="bg-black">
            <Icon icon={bxlApple} className="w-8 h-8 md:w-10 md:h-10" />
            <div className="text-xl">Download on App Store now</div>
          </Button>
        </Link>
        <Link className="inline-block" to="/">
          <Button bgColor="bg-black">
            <Icon icon={bxlPlayStore} className="w-8 h-8 md:w-10 md:h-10" />
            <div className="text-xl">Download on Play Store now</div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

SectionFour.propTypes = {};

export default SectionFour;
