import React, { useState } from "react";
// import PropTypes from 'prop-types'

// svg
import { ReactComponent as CrackedEgg } from "assets/common/svg/cracked_egg.svg";

// components
import FormInput from "components/common/FormInput";
import { AuthButton } from "components/common/buttons/AuthButton";
import { Link } from "react-router-dom";
import { Button } from "components/common/Button";

// icons
import { Icon, InlineIcon } from '@iconify/react';
import arrowLeftAlt from '@iconify/icons-dashicons/arrow-left-alt';

const PageNotFound = (props) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    console.log("Email has been sent to your email address.");
  };

  return (
    <div
      className="flex-col items-center justify-center text-center w-full w-max-content p-2
    "
    >
      {/* bg-pink-500 xs:bg-blue-400 sm:bg-purple-400 md:bg-green-500 lg:bg-orange-400 xl:bg-indigo-400 */}
      <div className="flex items-center justify-center">
        <CrackedEgg />
      </div>
      <div className="text-3xl xl:text-5xl text-gray-900 font-medium my-4">
        Ooopsss...
      </div>
      <div className="text-primary text-lg xl:tracking-wide">
        The page you are looking for isn’t available. <br />
        Please return to home page.
      </div>
      <div
        className="mt-4 transition duration-300 ease-in-out  
        transform hover:-translate-y-1 focus:-translate-y-1"
      >
        <Link
          className="text-accent underline inline-block
        "
          to="/"
        >
          <Button category="accent">
            <div className="text-primary text-xl flex items-center">
              <Icon icon={arrowLeftAlt} className="mr-3 text-2xl" />
              Go back to Homepage</div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

PageNotFound.propTypes = {};

export default PageNotFound;
