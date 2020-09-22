import React from "react";
// import PropTypes from 'prop-types'

const AdminAuthLayout = ({ children }) => {
  return (
    <div className="h-screen flex items-center m-auto">
      <div className="w-full max-w-md px-8 pt-16 pb-8 sm:shadow-xl m-auto overflow-hidden">
        {children}
      </div>
    </div>
  );
};

AdminAuthLayout.propTypes = {};

export default AdminAuthLayout;
