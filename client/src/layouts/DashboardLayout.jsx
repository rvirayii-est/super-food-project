import React, { useState, useRef } from "react";
// import PropTypes from 'prop-types'

// components
import Sidebar from "components/sidebar/Sidebar";
import AdminNavbar from "components/navbar/admin/AdminNavbar";
import ProfileDropdown from "components/navbar/admin/ProfileDropdown";
import useOutsideClick from "utilities/useOutsideClick";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const openDropdownRef = useRef();

  useOutsideClick(openDropdownRef, () => {
    if (open) setOpen(false);
  });

  return (
    <div className="flex flex-col-reverse sm:flex-row w-full h-screen">
      <Sidebar />

      <div className="w-full h-full my-16 sm:my-0 overflow-y-auto ">
        {/* bg-pink-500 sm:bg-purple-500 md:bg-green-500 lg:bg-orange-500 xl:bg-blue-500 */}
        <AdminNavbar open={open} setOpen={setOpen} />
        {open && (
          <div className="ease-in-out duration-300 transition fade" ref={openDropdownRef}>
            <ProfileDropdown />
          </div>
        )}
        <div className="mx-4 mt-8" style={{ height: '2000px'}}>{children}</div>
      </div>
    </div>
  );
};

DashboardLayout.propTypes = {};

export default DashboardLayout;
