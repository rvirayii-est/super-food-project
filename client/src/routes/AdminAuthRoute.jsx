import React from "react";
// import PropTypes from 'prop-types'

// router
import { Route } from "react-router-dom";

// layout
import AdminAuthLayout from "layouts/AdminAuthLayout";

const AdminAuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <AdminAuthLayout>
          <Component {...props} />
        </AdminAuthLayout>
      )}
    />
  );
};

AdminAuthRoute.propTypes = {};

export default AdminAuthRoute;