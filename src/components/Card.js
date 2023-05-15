import React from "react";

export const Card = ({ children }) => {
  return (
    <div className=" w-full p-3 bg-white border-[1px] shadow-customMedium ">
      {children}
    </div>
  );
};
