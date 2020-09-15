import React, { useState } from "react";
// import PropTypes from 'prop-types'

// data
import { DASHBOARD_ROUTES } from "data/dashboard-routes";
import { NavLink } from "react-router-dom";
import Icon from "@iconify/react";


// svg
import { ReactComponent as Logo } from 'assets/customer/svg/temporary_logo_2.svg';
const Sidebar = (props) => {
  const [sidebarLinks] = useState(DASHBOARD_ROUTES);

  return (
    <div className="flex sm:flex-col justify-evenly sm:justify-start fixed bottom-0 sm:static w-full sm:w-1/4 sm:h-full bg-gray-100 shadow-2xl sm:rounded-r-xl ">
      <div className="shadow-lg h-16 sm:flex items-center justify-center mb-1 hidden">
        <Logo className="mr-2 w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10" />
        <div className="text-primary text-sm md:text-lg lg:text-xl xl:text-2xl">
        FoodKart

        </div>
      </div>
      {sidebarLinks.map((links) => {
        const { id, routeName, name, icon } = links;
        return (
          <NavLink
            to={routeName}
            key={id}
            className="flex space-x-1 p-2
              transform hover:-translate-y-1 focus:-translate-y-1
              sm:border-l-4 sm:border-white sm:hover:border-primary sm:hover:text-primary
              transition duration-300 ease-in-out  
              items-center 
              text-gray-600
              text-sm md:text-lg
              xl:py-4"
            activeClassName="sm:border-l-4 sm:border-primary text-primary"
          >
            <Icon icon={icon} className="w-4 h-4 md:w-6 md:h-6" />
            <div className="hidden sm:block">{name}</div>
          </NavLink>
        );
      })}
    </div>
  );
};

Sidebar.propTypes = {};

export default Sidebar;
