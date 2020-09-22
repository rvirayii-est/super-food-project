import React from "react";
// import PropTypes from 'prop-types'

// router
import { Route } from "react-router-dom";

// layout
import AuthLayout from "layouts/AuthLayout";

const AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AuthLayout>
          <Component {...props} />
        </AuthLayout>
      )}
    />
  );
};

AuthRoute.propTypes = {};

export default AuthRoute;