import React, { useState } from "react";

// components
import SiteNavbar from "../../components/site/navbar.component";
import HeaderHero from "../../components/site/header-hero.component";

const LandingPage = () => {
  // TODO add reducer for this
  const [dropdownOpen, setDropDownOpen] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);

  const toggleDropdown = () => {
    setDropDownOpen(!dropdownOpen);
  };

  const toggleNavbar = () => {
    setCollapseOpen(!collapseOpen);
  };

  return (
    <div style={{ overflow: 'hidden', height: '3200px'}}>
      <SiteNavbar
        toggleDropdown={toggleDropdown}
        collapseOpen={collapseOpen}
        toggleNavbar={toggleNavbar}
        dropdownOpen={dropdownOpen}
      />
      <HeaderHero />
      <div className='sticky-top'>dfgdfg</div>
    </div>
  );
};

export default LandingPage;
