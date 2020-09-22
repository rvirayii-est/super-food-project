import React from "react";
// import PropTypes from 'prop-types'

// router
import { Route } from "react-router-dom";

// layout
import CustomerLayout from "layouts/CustomerLayout";

const CustomerRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <CustomerLayout>
          <Component {...props} />
        </CustomerLayout>
      )}
    />
  );
};

CustomerRoute.propTypes = {};

export default CustomerRoute;