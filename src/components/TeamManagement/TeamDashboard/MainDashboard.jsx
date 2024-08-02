import React from "react";
import ThemeContextProvider from "../../context/ThemeContextProvider";
import Sidebar from "../Sidebar/Sidebar";
import DashboardNavbar from "../../Player/DashboardNavbar";
import WelcomeMessage from "./WelcomeMessage";
import TeamProfileDetails from "./TeamProfileDetails";
import Footer from "../Footer/Footer";


const MainDashboard = () => {
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
            <div className="mx-4">
            <WelcomeMessage />
            </div>
            <div className="mt-9 ml-6 flex flex-wrap justify-center items-center">
              <TeamProfileDetails />
            </div>
        
           
            
          <Footer/>
          </div>
        </div>
      </ThemeContextProvider>
    </div>
  );
};

export default MainDashboard;
