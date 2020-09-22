import React from "react";
// import PropTypes from 'prop-types'

const Navbar = ({open, setOpen}) => {
  
  return (
    <div className="fixed sm:static top-0 w-full shadow-lg h-16">
      <div className="flex h-full justify-between px-4 items-center">
        {/* <div className="text-2xl font-medium">Inventory</div> */}
        <div className="ml-auto w-10 h-10 rounded-full overflow-hidden cursor-pointer" onClick={() => setOpen(!open)}>
          <img
            src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png"
            alt="lovely avatar"
            className="object-cover object-center w-full h-full visible group-hover:hidden"
          />
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
