import React, { useRef } from "react";
import PropTypes from 'prop-types'

// svg
import { ReactComponent as LogoSVG } from "assets/customer/svg/temporary_logo.svg";

// route
import { Link } from "react-router-dom";

// components
import { Button } from "components/common/Button";

// redux
import { connect } from "react-redux";
import { toggleCustomerNavbar } from "store/actions/toggle.action";

// utilities
import useOutsideClick from "utilities/useOutsideClick";

const Navbar = ({ toggleCustomerNavbar, open }) => {
  const openDropdownRef = useRef();

  useOutsideClick(openDropdownRef, () => {
    if (open) toggleCustomerNavbar(false);
  });

  return (
    <div className="fixed top-0 w-full  bg-white z-50 flex flex-col  px-3 shadow-md">
      <div className="flex justify-between w-full items-center h-20">
        <div className="">
          <LogoSVG />
        </div>

        <div className="md:hidden" onClick={toggleCustomerNavbar}>
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="menu-alt3 w-8 h-8 transition duration-300 ease-in-out hover:text-accent focus:text-accent"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="hidden md:flex items-center">
          <Link to="/register" className="w-64">
            Create account
          </Link>
          <Button category="accent" type="submit">
            <div className="text-primary text-base xl:text-xl">LOGIN</div>
          </Button>
        </div>
      </div>


      {open && (
          <div className="ease-in-out duration-300 transition fade" ref={openDropdownRef}>
            <div className="flex flex-col">
              <Link
                to="/register"
                className="py-2 rounded-lg text-center shadow-xl bg-gray-200 w-full"
              >
                Create account
              </Link>
              <Button category="accent" type="submit">
                <div className="text-primary text-base xl:text-xl">LOGIN</div>
              </Button>
            </div>
            
          </div>
        )}


    </div>
  );
};

Navbar.propTypes = {
  open: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  open: state.toggle.open
})
export default connect(mapStateToProps, { toggleCustomerNavbar })(Navbar);
