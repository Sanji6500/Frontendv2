import React from "react";
import { DataUpcoming } from "../Data/Data";

export const StatisticsCard = (props) => {
  return (
    <div className="  w-full  md:w-1/2 lg:w-1/4 xl:w-1/2  p-3   ">
      <div className=" bg-white  h-[180px]  rounded-lg   ">
        <div className=" w-full h-full  p-2 flex flex-col  justify-around">
          <div className="flex flex-row items-center justify-between">
            <p className="font-InterSemiBold  text-[15px] font-semibold">
              {props.Description}
            </p>

            {props.img ? (
              <img src={props.img} height="38" width="38" alt="" />
            ) : (
              <div></div>
            )}
          </div>
          <p className="font-InterSemiBold   font-semibold text-[35px]">
            {props.value}
          </p>

          <div className="flex flex-row items-center">
            <p className="   font-InterSemiBold     font-semibold  text-gray-700/50 text-[13px]">
              {props.previousDescription} :
            </p>
            <p className=" text-[#007FC3]  inline ml-2 font-InterSemiBold     font-semibold">
              {props.previousValue}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Statisticscard = ({
  CardValue,
  image,
  CardDescription,
  previousDescription,
  WinOrLose,
  Percentage,
  previousValue,
}) => {
  return (
    <div className="   w-full  sm:max-w-md px-3   h-[180px]  py-4 bg-white border-[1px] shadow-customMedium   ">
      <div className="flex  items-center justify-between ">
        <span className="  text-custom-apple-color  text-[28px] font-extrabold  font-LexendDeca leading-none  mr-7 ">
          {CardValue}
        </span>
        {image ? (
          <img src={image} height="38" width="38" alt="" />
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex   justify-between min-h-[85px] ">
        <span className="  text-custom-apple-color  text-[14px]  font-extralight  font-LexendDeca   mr-7 ">
          {CardDescription}
        </span>
      </div>
      <div className="flex   justify-between min-h-[0px] items-center ">
        <div className=" flex  items-center">
          <p className="    font-LexendDeca font-light  text-[#8F9EAC] text-[12px]  mr-1">
            {previousDescription} :
          </p>
          <p
            className={
              WinOrLose === true
                ? "  text-[#398B83]  font-LexendDeca  font-medium  text-[12px]"
                : " text-[#A90B0B]  font-LexendDeca  font-medium  text-[12px]"
            }
          >
            {previousValue}
          </p>
        </div>
        <div
          className={
            WinOrLose === true
              ? " bg-[#398B83]/20 text-[#398B83] h-[23px]  rounded-xl    flex  justify-center items-center   font-LexendDeca  font-semibold text-[12px]  min-w-[60px] "
              : " bg-[#A90B0B]/20 text-[#A90B0B] h-[23px]  rounded-xl   flex  justify-centeritems-center   font-LexendDeca  font-semibold  text-[12px]  min-w-[60px] "
          }
        >
          <span className=" mx-3 lg:mx-2">{Percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export const BigStatisticsCard = () => {
  return (
    <div className=" w-full  sm:max-w-lg px-3  max-h-[550px]  py-4 bg-white border-[1px] shadow-customMedium  ">
      <div className="flex items-center justify-between mb-12 ">
        <h5 className=" text-custom-apple-color  text-[16px] font-extrabold  font-LexendDeca leading-none">
          Upcoming Ads
        </h5>
        <a
          href="/"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500  mr-5"
        >
          View all
        </a>
      </div>

      <div className=" flex  items-center justify-between  pb-3   ">
        <p className=" text-custom-apple-color  text-[12px]    font-semibold  font-LexendDeca leading-none text-center  w-[calc(18%)]">
          Product Name
        </p>
        <p className="  text-custom-apple-color  text-[12px]    font-semibold  font-LexendDeca leading-none text-center  w-[calc(18%)]">
          From
        </p>
        <p className="   text-custom-apple-color  text-[12px]    font-semibold  font-LexendDeca leading-none text-center  w-[calc(18%)]">
          to
        </p>
        <p className="  text-custom-apple-color  text-[12px]    font-semibold  font-LexendDeca leading-none text-center  w-[calc(18%)]">
          Stauts
        </p>
      </div>
      <div className=" bg-black/10  h-[1px]  w-[calc(97%)] "></div>
      {DataUpcoming.slice(0, 3).map((Data, index) => (
        <React.Fragment key={Data.ProductName}>
          <div className=" flex justify-between items-center  py-4 ">
            <p className="  text-custom-apple-color  text-[12px]  font-light  font-LexendDeca leading-none text-center w-[calc(18%)]  whitespace-nowrap text-ellipsis ">
              {Data.ProductName}
            </p>
            <p className="  text-custom-apple-color  text-[12px] font-light  font-LexendDeca leading-none text-center  w-[calc(18%)]  whitespace-nowrap text-ellipsis">
              {Data.from}
            </p>
            <p className="   text-custom-apple-color  text-[12px] font-light   font-LexendDeca leading-none text-center  w-[calc(18%)]  whitespace-nowrap text-ellipsis">
              {Data.to}
            </p>
            <p className="  text-custom-apple-color  text-[12px] font-light  font-LexendDeca leading-none text-center w-[calc(18%)]  whitespace-nowrap text-ellipsis">
              Stauts
            </p>
          </div>
          {index !== 2 ?  (<div className=" bg-black/10  h-[1px]  w-[calc(97%)]"></div>):null  } 
          {/* {index < 3 &&(   <div className=" bg-black/10  h-[1px]  w-[calc(97%)]"></div>) : null} */}
        </React.Fragment>
      ))}
    </div>
  );
};
