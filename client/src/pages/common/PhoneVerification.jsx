import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PhoneVerification = (props) => {
  return (
    <div className="sm:shadow-md flex flex-col items-center p-6">
      <div className="text-primary font-medium text-3xl">
        Mobile Verification
      </div>
      <div className="text-center mt-4">Please enter the 4-digit verification code we sent via SMS to +63*****7838</div>
      <div className="flex items-center space-x-2 my-8">
        <input
          className="border w-20 h-20 text-5xl pl-6"
          type="text"
          maxLength="1"
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
        />
        <input
          className="border w-20 h-20 text-5xl pl-6"
          type="text"
          maxLength="1"
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
        />
        <input
          className="border w-20 h-20 text-5xl pl-6"
          type="text"
          maxLength="1"
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
        />
        <input
          className="border w-20 h-20 text-5xl pl-6"
          type="text"
          maxLength="1"
          size="1"
          min="0"
          max="9"
          pattern="[0-9]{1}"
        />
      </div>
      <div className="text-primary text-lg">Didn't receive the code?</div>
      <div className="cursor-pointer text-accent hover:text-orange-700 text-lg">
        Send code again
      </div>
      <Link to="/update-phone" className="cursor-pointer text-accent hover:text-orange-700 text-lg">
        Change phone number
      </Link>
    </div>
  );
};

PhoneVerification.propTypes = {};

export default PhoneVerification;
