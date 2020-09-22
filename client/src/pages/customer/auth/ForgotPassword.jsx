import React, { useState } from "react";
// import PropTypes from 'prop-types'

// svg
import { ReactComponent as ForgotPasswordBox } from "assets/common/svg/forgot_password_box.svg";

// components
import FormInput from "components/common/FormInput";
import { AuthButton } from "components/common/buttons/AuthButton";
import { Link } from "react-router-dom";

const ForgotPassword = (props) => {
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
        <ForgotPasswordBox />
      </div>
      <h1 className="text-3xl xl:text-4xl text-gray-900 font-medium my-4">
        Forgot Password?
      </h1>
      <div className="text-primary text-lg xl:tracking-wide">
        Don’t worry! Resetting your password is easy. <br />
        Just type in the email you used in your account.
      </div>
      <form
        className="flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <FormInput
          type="email"
          value={email}
          name="email"
          id="forgotPasswordEmail"
          label="Email Address"
          handleChange={handleChange}
        />
        <div className="flex items-center mt-4">
          <AuthButton type="submit" />
        </div>
      </form>
      <div
        className="mt-4 transition duration-300 ease-in-out  
        transform hover:-translate-y-1 focus:-translate-y-1"
      >
        <Link
          className="text-accent underline  
        "
          to="/login"
        >
          I suddenly remembered my password
        </Link>
      </div>
    </div>
  );
};

ForgotPassword.propTypes = {};

export default ForgotPassword;
