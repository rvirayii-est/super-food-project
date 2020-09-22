import React from "react";
// import PropTypes from 'prop-types'

// router
import { Route } from "react-router-dom";

// layout
import CenteredLayout from "layouts/CenteredLayout";

const CenteredRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <CenteredLayout>
          <Component {...props} />
        </CenteredLayout>
      )}
    />
  );
};

CenteredRoute.propTypes = {};

export default CenteredRoute;