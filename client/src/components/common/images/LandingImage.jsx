import React from "react";
// import PropTypes from 'prop-types'

const LandingImage = ({ offer: { image, title, description, alternate } }) => {
  return (
    <div
      className={`md:relative flex flex-col ${
        alternate ? "md:flex-row-reverse" : "md:flex-row"
      } items-center md:mb-16`}
    >
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-full md:w-48 md:h-48 lg:w-64 lg:h-64"
      />
      <div
        className={`hidden md:block w-48 h-48 lg:w-64 lg:h-64 border border-primary md:absolute md:-z-1 md:mt-12 ${
          alternate ? 'md:-mr-6' : " md:-ml-6"
        }`}
      ></div>
      <div
        className={`flex flex-col my-4 md:my-3 ${
          alternate ? "md:mr-8 xl:mr-20" : "md:ml-8 xl:ml-20"
        }`}
      >
        <div className="text-accent font-medium text-3xl mb-4">{title}</div>
        <div className="text-xl md:text-base lg:text-xl text-primary">{description}</div>
      </div>
    </div>
  );
};

LandingImage.propTypes = {};

export default LandingImage;
