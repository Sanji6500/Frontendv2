import React from "react";
import Vistbar from "../../Images/Highlyanticipate.svg";

import {
  Statisticscard,
  BigStatisticsCard,
} from "../../components/StatisticsCard";
import StatisticsChart from "../../components/StatisticsChart";

const Dashboard = () => {
  return (
    <div className="  max-w-[90%]     mx-auto   ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-6 gap-1 place-items-center ">
        <Statisticscard
          CardValue="35"
          image={Vistbar}
          CardDescription="Daily visit on Products"
          previousDescription="last month vist "
          previousValue="15"
          WinOrLose={true}
          Percentage="15"
        />
        <Statisticscard
          CardValue="35"
          image={Vistbar}
          CardDescription="Daily visit on Products"
          previousDescription="last month vist "
          previousValue="15"
          WinOrLose={true}
          Percentage="15"
        />
        <Statisticscard
          CardValue="35"
          image={Vistbar}
          CardDescription="Daily visit on Products"
          previousDescription="last month vist "
          previousValue="15"
          WinOrLose={true}
          Percentage="15"
        />
        <Statisticscard
          CardValue="35"
          image={Vistbar}
          CardDescription="Daily visit on Products"
          previousDescription="last month vist "
          previousValue="15"
          WinOrLose={true}
          Percentage="15"
        />
      </div>
      <div className=" grid grid-cols-1 xl:grid-cols-2 gap-2 place-items-center mt-2 ">
        <StatisticsChart />
        <StatisticsChart />
      </div>

      <div className=" grid grid-cols-1  xxl:grid-cols-3 gap-2 place-items-center mt-2 ">
        <BigStatisticsCard />
        <BigStatisticsCard />
        <BigStatisticsCard />
      </div>
    </div>
  );
};

export default Dashboard;
