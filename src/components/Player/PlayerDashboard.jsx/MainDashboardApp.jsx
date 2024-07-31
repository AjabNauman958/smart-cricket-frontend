import React from "react";
import ThemeContextProvider from "../../context/ThemeContextProvider";
import Sidebar from "../Sidebar";
import DashboardNavbar from "../DashboardNavbar";
import WelcomeMessage from "./WelcomeMessage";
import PlayerProfileCard from "./PlayerProfileCard";
import PlayerProfileDetails from "./PlayerProfileDetails";
import PlayerCareerStats from "./PlayerCareerStats";
import AverageGraph from "./AverageGraph";
import TeamScheduleDashboard from "../TeamSchedule/TeamScheduleDashboard";
import Footer from "../Footer";

const MainDashboardApp = () => {
  return (
    <div>
      <ThemeContextProvider>
        <div >
          <Sidebar />
          <div
            className="grow ml-16 md:ml-64  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap"
          >
            <DashboardNavbar />
            <WelcomeMessage />
            <div className="mt-9 ml-6 flex flex-wrap justify-center items-center">
              <PlayerProfileCard />
              <PlayerProfileDetails />
            </div>
            <div className="flex-wrap">
              <PlayerCareerStats />
            </div>
            <div>
              <AverageGraph />
            </div>
            <div>
            <h1 className='text-4xl font-semibold text-center mt-5'>
        <span className='text-green-500'>Team </span> Schedule
      </h1>
              <TeamScheduleDashboard league="recent" />
              <TeamScheduleDashboard league="upcoming" />
            </div>
          <Footer/>
          </div>
        </div>
      </ThemeContextProvider>
    </div>
  );
};

export default MainDashboardApp;
