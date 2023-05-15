import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";

export const ItemsNavbar = (props) => {
  return (
    <li className=" ">
      <Link
        className="   my-1  flex w-full   hover:bg-custom-apple-sidebar  focus:font-black  focus:text-red-800  focus:bg-custom-apple-sidebar  hover:text-[#F8EDE8]   cursor-pointer items-center px-3 py-[2px] space-x-3  rounded-sm "
        to={props.to}
      >
        {props.image}
        <p className="   my-[10px]  md:my-1   text-[16px] md:text-[14px]   text-custom-apple-color  items-center     font-medium  font-LexendDeca">
          {props.items}
        </p>
      </Link>
    </li>
  );
};

export const NestItemNavbar = ({ FatherValue, FatherImgae, NestsItems }) => {
  /////// i need solution
  let ColumnName = Object.keys(NestsItems[0]);

  const [SidebarDropdown, setSidebarDropdown] = useState(false);
  return (
    <li className={`   ${SidebarDropdown ? null : ""}`}>
      <div
        className="    my-1 max-h-[49.48px]  flex w-full   hover:bg-custom-apple-sidebar focus:font-bold  focus:bg-custom-apple-sidebar  hover:text-[#F8EDE8]   cursor-pointer items-center px-3  py-[2px] space-x-3  rounded-sm "
        onClick={() => setSidebarDropdown(!SidebarDropdown)}
      >
        {FatherImgae}
        <p className="   my-[10px]  md:my-1   text-[16px] md:text-[14px]  text-custom-apple-color  items-center    font-medium   font-LexendDeca">
          {FatherValue}
        </p>

        <BiChevronDown
          size={18}
          className={`${SidebarDropdown && "rotate-180  bg "}`}
          style={{ color: "#223548" }}
        />
      </div>

      <ul
        className={` overflow-y-hidden   bg-none w-full  ${
          SidebarDropdown
            ? " max-h-64 ease-in-out duration-500 "
            : "max-h-0  ease-in-out duration-500"
        }`}
      >
        {NestsItems.map((data, index) => (
          <li key={index} className=" ">
            <Link
              className="    my-1  flex w-full   hover:bg-custom-apple-sidebar focus:bg-custom-apple-sidebar  hover:text-[#F8EDE8]   cursor-pointer items-center px-3 py-[2px] space-x-3  rounded-sm"
              to={data[ColumnName[0]]}
            >
              {data[ColumnName[1]]}
              <p className="   my-[10px]  md:my-1   text-[16px] md:text-[14px]    text-custom-apple-color  items-center   font-normal font-LexendDeca">
                {data[ColumnName[2]]}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};
