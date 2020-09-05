import React, { useState } from "react";

// components
import SiteNavbar from "../../components/site/navbar.component";
import HeaderAbout from "../../components/site/header-about.component";
import LandingUser from "../../components/site/About-sections/about-user.component";
import LandingMerchant from "../../components/site/About-sections/about-merchant.component";
import LandingDelivery from "../../components/site/About-sections/about-delivery.component";


import Footer from "../../components/site/footer.component";
const AboutPage = () => {
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
        <div style={{ overflow: 'hidden' }}>
            <SiteNavbar
                toggleDropdown={toggleDropdown}
                collapseOpen={collapseOpen}
                toggleNavbar={toggleNavbar}
                dropdownOpen={dropdownOpen}
            />
            <HeaderAbout />
            <LandingUser />
            <LandingMerchant />
            <LandingDelivery />

            <Footer />
        </div>
    );
};

export default AboutPage;
