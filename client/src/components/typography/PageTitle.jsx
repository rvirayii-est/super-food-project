import React from "react";

export const PageTitle = ({ title, subtitle }) => {
  return (
    <div>
      <div className="text-gray-600 uppercase text-sm">{subtitle}</div>
      <div className="font-medium text-2xl lg:text-3xl leading-6 text-primary">{title}</div>
    </div>
  );
};
