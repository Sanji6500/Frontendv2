import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: [15, 16, 17, 20, 1, 5, 6],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const StatisticsChart = () => {
  return (
    <div className="    w-full px-3    max-h-[400px]  py-4 bg-white border-[1px] shadow-customMedium   ">
      <div className=" flex flex-wrap mb-1 min-h-[50px]">
        <p className=" font-InterSemiBold text-[19px] font-bold">
          Average number of visits
        </p>
      </div>

      <div className=" flex flex-wrap w-[calc(80%)]  justify-between ">
        <p className="font-InterSemiBold    text-gray-700/50 text-[12px] ">
          as of 30 May 2022
        </p>
        <div className=" flex  items-center  justify-end  ">
          <div className=" bg-[#007FC3]/60 h-[7px]  rounded-xl mr-1   flex  justify-center items-center font-InterSemiBold text-[13px]  min-w-[20px]  "></div>
          <p className=" text-[12px]   font-InterSemiBold text-gray-700/50">
            today
          </p>
        </div>
      </div>

      <div className=" h-[300px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default StatisticsChart;
