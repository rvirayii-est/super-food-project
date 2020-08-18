import React from "react";

import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  // NavItem,
  // NavLink,
  // Dropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // InputGroup,
  // InputGroupAddon,
  // InputGroupText,
  // FormInput,
  Collapse,
  Button
} from "shards-react";

// router
import { Link } from 'react-router-dom';

// logo
import { ReactComponent as Logo } from "../../assets/temporary_logo.svg";

const SiteNavbar = ({
  collapseOpen,
  toggleNavbar,
  // dropdownOpen,
  // toggleDropdown
}) => {
  return (
    <Navbar fixed={true} type="light" className='navbar fixed-top bg-white' expand="md">
      <NavbarBrand href="#">
        <Logo style={{ width: "10rem" }} />
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />

      <Collapse open={collapseOpen} navbar>
        <Nav navbar className="ml-auto">
          <Link className='nav-link' to='/register'>Create an account</Link>
            <Button className='btn-block' theme="accent">
          <Link to='/login' style={{color: '#000'}}>
              LOGIN
          </Link>
            </Button>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default SiteNavbar;
