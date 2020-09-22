import React from "react";
// import PropTypes from 'prop-types'

// components
import { PageTitle } from "components/typography/PageTitle";

const UsersOverview = (props) => {
  return (
    <div className="h-full">
      {/*  bg-pink-500 xs:bg-blue-400 sm:bg-purple-400 md:bg-green-500 lg:bg-orange-400 xl:bg-indigo-400 */}
      <PageTitle title="Users" subtitle="overview" />
    </div>
  );
};

UsersOverview.propTypes = {};

export default UsersOverview;
