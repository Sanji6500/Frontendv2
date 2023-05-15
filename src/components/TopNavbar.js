import React, { useState } from "react";
import EmptyUser from "../Images/emptyUser.svg";
import Notifications from "../Images/notifications.svg";
import Nightmode from "../Images/nightmode.svg";
import Logo from "../Images/logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";

import { Link } from "react-router-dom";
import { ReactComponent as Iconsearch } from "../Images/search.svg";

function TopNavbar({ setStatusSidebar }) {
  const [searchValue, setSearch] = useState("");
  const serachedValue = (e) => {
    setSearch(e.target.value);
  };

  const ChangeStatusSidebar = () => {
    setStatusSidebar(true);
  };

  return (
    <div className="  fixed  w-full   top-0 left-0  right-0 z-[1] ">
      <div className=" h-14 bg-white border-b-1    flex-none flex justify-between  shadow-custom   ">
        <div
          className=" md:hidden flex  items-center p-4 cursor-pointer"
          onClick={ChangeStatusSidebar}
        >
          <RxHamburgerMenu style={{ color: "#223548" }} size={25} />
        </div>

        <Link className="  hidden md:flex  items-center   px-4  mr-9" to="/">
          <img src={Logo} alt="" className="rounded-full " />
        </Link>

        <div className=" flex    justify-between flex-grow  ml-[calc(2%)] xl:ml-[calc(10%)]">
          <div className=" relative flex items-center flex-grow  mr-[calc(10%)]   ">
            <input
              onChange={serachedValue}
              value={searchValue}
              className=" pl-10   w-full  md:w-full xl: max-w-[580px] h-[32px]  bg-white border shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 
                 focus:ring-sky-500 block  rounded-md  text-sm focus:ring-1 "
              type="text"
              placeholder="Search ....."
            />
            <Iconsearch
              className=" absolute top-[20px]  left-3  fill-[#868FA0] text-cyan-600  AAA"
              height="15px"
              width="15px"
            />
          </div>

          <div className="  flex  relative  justify-end ">
            <div className="  flex items-center bg-none mr-3">
              <button
                type="button"
                className="   flex space-x-3 items-center   py-2 px-2  md:rounded-md  rounded-full w-full text-sm   bg-none   hover:bg-custom-apple-hover   "
              >
                <img
                  src={Nightmode}
                  height="20"
                  width="20"
                  alt=""
                  className="rounded-full "
                />
              </button>
              <button
                type="button"
                className="   flex space-x-3 items-center   py-2 px-2  md:rounded-md  rounded-full w-full text-sm   bg-none   hover:bg-custom-apple-hover   "
              >
                <img
                  src={Notifications}
                  height="20"
                  width="20"
                  alt=""
                  className="rounded-full "
                />
              </button>
            </div>

            <div className=" md:mr-2  flex items-center bg-none line">
              <button
                type="button"
                className="   flex space-x-3 items-center   py-2 px-2  md:rounded-md  rounded-full w-full text-sm   bg-none   hover:bg-custom-apple-hover  font-InterSemiBold   font-medium  "
              >
                <img
                  src={EmptyUser}
                  height="25"
                  width="25"
                  alt=""
                  className="rounded-full "
                />
                <p className="   whitespace-nowrap text-ellipsis  text-[14px] font-LexendDeca text-custom-apple-color font-semibold  line-height  hidden   md:block  ">
                  Markt Name
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopNavbar;
