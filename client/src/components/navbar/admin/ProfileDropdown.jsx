import React from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from 'prop-types'

// icon
import { Icon } from "@iconify/react";

// data
import { PROFILE_DROPDOWN_ROUTES } from "data/profile-dropdown-routes";

const ProfileDropdown = (props) => {
  return (
    <div className="shadow-2xl w-2/12 absolute bg-white overflow-hidden right-0 mr-8 top-1 mt-3 z-10">
      {PROFILE_DROPDOWN_ROUTES.map((navitem) => {
        const { id, icon, name, routeName } = navitem;
        return (
          <NavLink
            key={id}
            to={routeName}
            className={`rounded-md flex items-center space-x-2 m-2 p-2
            text-sm
            focus:bg-accentLight
            focus:outline-none
            ${name === "Logout" ? "hover:bg-red-200" : "hover:bg-accentLight"}
            transform transition duration-500 ease-in-out
            `}
            activeClassName="bg-gradient-to-r from-bg-none via-pink-500 to-red-500 "
          >
            <div className="p-2 rounded-full bg-gray-200 flex items-center justify-center">
              <Icon
                icon={icon}
                className={`w-5 h-5 ${name === "Logout" ? "text-red-500" : ""}`}
              >
                {icon}
              </Icon>
            </div>
            <div
              className={`font-medium ${
                name === "Logout" ? "text-red-500" : ""
              }`}
            >
              {name}
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

ProfileDropdown.propTypes = {};

export default ProfileDropdown;
