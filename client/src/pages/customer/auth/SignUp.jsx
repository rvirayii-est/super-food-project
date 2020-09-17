import React, { useState } from "react";
import PropTypes from 'prop-types';

// svg
import { ReactComponent as SignUpSVG } from "assets/customer/svg/signUpSVG.svg";

// icons
import { InlineIcon } from "@iconify/react";
import bxlGoogle from "@iconify/icons-bx/bxl-google";
import bxlFacebookSquare from "@iconify/icons-bx/bxl-facebook-square";

// components
import { OrLine } from "components/OrLine";
import FormInput from "components/common/FormInput";
import { Button } from "components/common/Button";

// route
import { Link, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";
import { register } from "store/actions/auth.action";

const SignUp = ({ register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error('Password do not match!');
    } else {
      register({ name, email, password });
      console.log(formData);
      console.log("SignUp Success");
    }
  };

    // redirect if logged in
    if (isAuthenticated) {
      return <Redirect to="/" />;
    }

  return (
    <div className="w-full lg:w-10/12 xl:w-10/12 flex flex-col space-x-2 md:flex-row items-center text-center mx-4">
      {/*  bg-pink-500 sm:bg-purple-400 md:bg-green-500 lg:bg-orange-500 xl:bg-blue-500 */}
      <div className="md:w-4/6">
        <SignUpSVG />
      </div>
      <div className="md:w-2/6">
        <h1 className="text-3xl xl:text-4xl text-primary">Sign Up to FoodKart</h1>
        <Button category="google" type="submit">
          <InlineIcon className="w-6 h-6" icon={bxlGoogle} />
          <div className="text-white text-base xl:text-xl">Sign Up with Google</div>
        </Button>

        <Button category="facebook" type="submit">
          <InlineIcon className="w-6 h-6" icon={bxlFacebookSquare} />
          <div className="text-white text-base xl:text-xl">Sign Up with Facebook</div>
        </Button>
        <div className="mt-8">
          <OrLine />
        </div>

        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            value={name}
            name="name"
            id="signUpname"
            label="Full Name"
            handleChange={handleChange}
          />
          <FormInput
            type="email"
            value={email}
            name="email"
            id="signUpEmail"
            label="Email Address"
            handleChange={handleChange}
          />
          <FormInput
            type="password"
            value={password}
            name="password"
            id="signUpPassword"
            label="Password"
            handleChange={handleChange}
          />
          <FormInput
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            id="signUpConfirmPassword"
            label="Confirm Password"
            handleChange={handleChange}
          />

          {/* SECTION terms */}
          <div className="text-sm text-primary text-left my-4">
            By signing up, you agree to our{" "}
            <Link
              className="text-accent hover:text-accentLight transition duration-300 ease-in-out"
              to="/terms"
            >
              Terms and Services
            </Link>{" "}
            and that you have read our{" "}
            <Link
              className="text-accent hover:text-accentLight transition duration-300 ease-in-out"
              to="/policy"
            >
              Data Use Policy
            </Link>
            , including our{" "}
            <Link
              className="text-accent hover:text-accentLight transition duration-300 ease-in-out"
              to="/cookie-use"
            >
              Cookie Use
            </Link>
            .
          </div>

          {/* SECTION Submit */}
          <Button category="accent" type="submit">
            <div className="text-primary text-base xl:text-xl">Create new account</div>
          </Button>
        </form>
        <div className="text-xl text-primary mt-4">
          Already have an account?{" "}
          <Link to='/login' className="text-accent hover:text-accentLight transition duration-300 ease-in-out">
            Login Here
          </Link>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(SignUp);
