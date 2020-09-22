import React from "react";
// import PropTypes from 'prop-types'

// router
import { Route } from "react-router-dom";

// layout
import DashboardLayout from "layouts/DashboardLayout";

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
      )}
    />
  );
};

DashboardRoute.propTypes = {};

export default DashboardRoute;