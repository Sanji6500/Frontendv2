import React from "react";
import { useGetWidth } from "../Hocks/useGetWidth";
import { ItemsNavbar, NestItemNavbar } from "./ItemsNavbar";
import { RiDashboardFill, RiProductHuntFill } from "react-icons/ri";
import { FaAdversal } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai";
import Logo from "../Images/logo.jpg";
import { Link } from "react-router-dom";

function Sidebar({ MobileSidebarValue, onClose }) {
  const width = useGetWidth();
  const NestNavber = [
    {
      to: "/Adervertising",
      image: <RiProductHuntFill style={{ color: "#F8EDE8" }} size={20} />,
      Value: "Add Adervertising",
    },
    {
      to: "/AdervertisingBrowser",
      image: <RiProductHuntFill style={{ color: "#F8EDE8" }} size={20} />,
      Value: "Adervertising Browser",
    },
    {
      to: "/",
      image: <RiProductHuntFill style={{ color: "#F8EDE8" }} size={20} />,
      Value: "test",
    },
  ];
  return (
    <div
      className={`         ${
        MobileSidebarValue && "fixed inset-0  bg-[#00000080] z-[2] "
      }   `}
      onClick={onClose}
    >
      <div
        className={` ${
          MobileSidebarValue
            ? " flex   translate-x-[0px] ease-in-out    max-md:duration-500 md:duration-0   "
            : "  max-md:translate-x-[-350px] md:translate-x-[0px]  ease-in-out  md:duration-0 "
        }   ${
          width <= 768 && " duration-500 "
        } w-[350px]  md:w-[210px] md:flex  flex-col justify-start   md:top-[56px]  border-r-[1px] border-[#dde0e4]  md:h-[calc(100%-56px)] h-full bg-[#f1f2f4]   fixed`}
      >
        {MobileSidebarValue && (
          <div
            className={`         ${
              MobileSidebarValue &&
              " bg-white  h-14 flex items-center shadow-custom "
            }    `}
          >
            <Link className=" flex  items-center  mr-9 px-4  " to="/">
              <img src={Logo} alt="" className="rounded-full " />
            </Link>
          </div>
        )}

        <ul className=" mt-2 px-2 ease-in-out duration-700  z-50  ">
          <ItemsNavbar
            to="/"
            items="Dashborad"
            image={<RiDashboardFill style={{ color: "#223548" }} size={20} />}
          />
          <ItemsNavbar
            to="/Products"
            items="Products"
            image={<RiProductHuntFill style={{ color: "#223548" }} size={20} />}
          />

          <NestItemNavbar
            FatherImgae={<FaAdversal style={{ color: "#223548" }} size={20} />}
            FatherValue="Advertising"
            NestsItems={NestNavber}
          />

          <ItemsNavbar
            to="/Settings"
            items="Settings"
            image={<AiTwotoneSetting style={{ color: "#223548" }} size={20} />}
          />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
