import React, { useState } from "react";
import PropTypes from "prop-types";

// svg
import { ReactComponent as SignInSVG } from "assets/customer/svg/signInSVG.svg";

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
import { login } from "store/actions/auth.action";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
    console.log(formData);
    console.log("Login Success");
  };

  // redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="w-full lg:w-10/12 xl:w-9/12 flex flex-col space-x-2 md:flex-row items-center mx-4">
      {/*  bg-pink-500 sm:bg-purple-400 md:bg-green-500 lg:bg-orange-500 xl:bg-blue-500 */}
      <div className="md:w-4/6">
        <SignInSVG />
      </div>
      <div className="md:w-2/6">
        <h1 className="text-3xl xl:text-4xl text-primary text-center">
          Sign In to FoodKart
        </h1>
        <div className="mb-3">
        <Button category="google" type="submit">
          <InlineIcon className="w-6 h-6" icon={bxlGoogle} />
          <div className="text-white text-base xl:text-xl">
            Sign In with Google
          </div>
        </Button>

        </div>

        <Button category="facebook" type="submit">
          <InlineIcon className="w-6 h-6" icon={bxlFacebookSquare} />
          <div className="text-white text-base xl:text-xl">
            Sign In with Facebook
          </div>
        </Button>
        <div className="mt-8">
          <OrLine />
        </div>

        <form onSubmit={handleSubmit}>
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
          {/* SECTION Always keep login button */}
          <div className="my-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-accent"
              />
              <span className="ml-4 text-xl">Always keep logged in</span>
            </label>
          </div>

          {/* SECTION Submit */}
          <Button category="accent" type="submit">
            <div className="text-primary text-base xl:text-xl">Login</div>
          </Button>
        </form>
        <div className="text-xl text-primary mt-4">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-accent hover:text-accentLight transition duration-300 ease-in-out"
          >
            Sign Up Here
          </Link>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
