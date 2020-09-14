import React, { useState } from "react";
import PropTypes from "prop-types";

// components
import FormInput from "components/common/FormInput";
import { AuthButton } from "components/common/buttons/AuthButton";
import { SocialMediaButton } from "components/common/buttons/SocialMediaButtons";

// router
import { Redirect } from "react-router-dom";

// icons
import bxlFacebook from "@iconify/icons-bx/bxl-facebook";
import bxlTwitter from "@iconify/icons-bx/bxl-twitter";
import bxlGoogle from "@iconify/icons-bx/bxl-google";

// redux
import { connect } from "react-redux";
import { login } from "store/actions/auth.action";

const AdminLogin = ({ login, isAuthenticated }) => {
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
    console.log("Admin Login Success");
  };

  const socialMedia = [
    {
      id: 1,
      icon: bxlFacebook,
      name: "Facebook",
      color: "bg-blue-700",
    },
    {
      id: 2,
      icon: bxlTwitter,
      name: "Twitter",
      color: "bg-blue-500",
    },
    {
      id: 3,
      icon: bxlGoogle,
      name: "Google",
      color: "bg-red-700",
    },
  ];

  // redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/admin/dashboard" />;
  }

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl text-gray-900">Hello</h1>
        <h2 className="text-base text-gray-900 font-medium">
          Login to your account
        </h2>
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
        {/* sign in button */}
        <div className="flex justify-end pt-16 pb-12">
          <AuthButton type="submit">Login</AuthButton>
        </div>
      </form>
      <div className="text-gray-700 text-sm flex  flex-col items-center justify-center">
        Or login using social media
        {/* social media buttons */}
        <div className="flex space-x-2 my-4">
          {socialMedia.map((account) => {
            return (
              <SocialMediaButton key={account.id} socialMediaDetail={account} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

AdminLogin.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(AdminLogin);
