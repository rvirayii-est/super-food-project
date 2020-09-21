import Icon from "@iconify/react";
import { FOOTER_CATEGORIES } from "data/footer-categories";
import { LANDING_SOCIAL_MEDIA } from "data/landing-social-media";
import React from "react";
// import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <>
      <div className="flex flex-col justify-start items-baseline lg:flex-row p-12">
        <div>
          <div className="text-3xl text-primary">FoodKart</div>
          <div className="text-gray-600 text-xl">
            Why starve when you have us
          </div>
          <hr className="bg-gray-600 my-4" />
          <div className="text-gray-600 text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>

          <div className="text-gray-700 font-medium text-xl my-4">
            Follow us on social media
          </div>
          {/* social media */}
          {LANDING_SOCIAL_MEDIA.map((socialMedia) => {
            const { id, icon } = socialMedia;
            //unsused: name, link
            return (
              <div
                key={id}
                className="inline-block p-2 rounded-md mr-2 bg-gray-200"
              >
                <Icon icon={icon} className="w-8 h-8" />
              </div>
            );
          })}
        </div>
        <div className="my-8 lg:ml-12">
          <div className="text-3xl text-primary">Popular Cuisines</div>
          <div className="flex flex-wrap my-4">
            {FOOTER_CATEGORIES.map((category) => {
              const { id, name } = category;
              // unused: link
              return (
                <div
                  key={id}
                  className="w-1/2 md:w-1/3 lg:w-1/4 mb-2 text-gray-600 text-xl hover:text-accent
                transition transform duration-300
                hover:-translate-y-1
                "
                >
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-24 bg-gray-800 text-white text-2xl">
        © FoodKart {new Date().getFullYear()} | All Rights Reserved.
      </div>
    </>
  );
};

Footer.propTypes = {};

export default Footer;
