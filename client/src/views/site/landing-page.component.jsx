import React, { useState } from "react";

// components
import SiteNavbar from "../../components/site/navbar.component";
import HeaderHero from "../../components/site/header-hero.component";
import LandingSectionTwo from "../../components/site/section-two.component";
import LandingSectionThree from "../../components/site/section-three.component";

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
    <div style={{ overflow: 'hidden'}}>
      <SiteNavbar
        toggleDropdown={toggleDropdown}
        collapseOpen={collapseOpen}
        toggleNavbar={toggleNavbar}
        dropdownOpen={dropdownOpen}
      />
      <HeaderHero />
      <LandingSectionTwo />
      <LandingSectionThree />
    </div>
  );
};

export default LandingPage;
