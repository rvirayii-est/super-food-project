import React from "react";
import Icon from "@iconify/react";

export const SocialMediaButton = ({ socialMediaDetail: { color, icon } }) => {
  // name
  return (
    <div
      className={`p-3 rounded-full ${color} text-white  shadow-lg transform  duration-300 ease-in-out hover:-translate-y-1 cursor-pointer hover:opacity-75 focus:-translate-y-1`}
    >
      <Icon icon={icon} className="w-6 h-6" />
    </div>
  );
};
