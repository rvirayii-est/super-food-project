import React from "react";

const FormInput = ({ addStyles, handleChange, label, ...props }) => {
  return (
    <div className="relative my-4 mt-8 focus-within:border-blue-500">
      <input
        {...props}
        placeholder=" "
        onChange={(e) => handleChange(e)}
        className={`block border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:border-accent focus:outline-none bg-transparent ${addStyles}`}
      />
      <label
        htmlFor={props.id}
        className="absolute top-0 left-0 -z-1 mt-2 ml-2 origin-0 duration-500 text-gray-500"
      >
        {label}
      </label>
    </div>
  );
};

export const AddressFormInput = ({ handleChange, label, ...props }) => {
  return (
    <div className="relative my-4 mt-8 focus-within:border-blue-500">
      <input
        {...props}
        placeholder=" "
        onChange={(e) => handleChange(e)}
        className="search-address-input block border border-primary rounded w-full py-3 px-3 text-primary placeholder-primary leading-tight  appearance-none focus:border-accent focus:outline-none bg-transparent"
      />
      <label
        htmlFor={props.id}
        className="absolute top-0 left-0 mt-3 ml-2 origin-0 duration-500 text-gray-500"
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
