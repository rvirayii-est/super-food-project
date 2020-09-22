import React from "react";

// icons
import { Icon } from "@iconify/react";
import arrowRightAlt from "@iconify/icons-dashicons/arrow-right-alt";

export const AuthButton = ({ children, ...props }) => {
  return (
    <>
      <div className="flex items-center">
          <h1 className="text-2xl text-gray-900 mr-3 font-medium">
            {children}
          </h1>
        <button
          {...props}
          className="px-3 py-1 rounded-full 
        bg-accent
        hover:opacity-75 hover:-translate-y-1 hover:shadow-lg
        focus:opacity-75 focus:-translate-y-1 focus:shadow-lg
        focus:outline-none
        transform transition duration-500 ease-in-out"
        >
          
          <Icon icon={arrowRightAlt} className="w-6 h-6 text-white" />
        </button>
      </div>
    </>
  );
};
