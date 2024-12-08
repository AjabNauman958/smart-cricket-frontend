import React, { useState } from "react";
import {
  FaHome,
  FaRegClock,
  FaChartLine,
  FaChartBar,
  FaFistRaised,
  FaUser,
  FaBars,
  FaTimes,
  FaUsers,
  FaListAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`bg-gray-100 text-gray-900 h-screen px-4 fixed ${isOpen ? "w-72" : "w-20"
        } md:w-64 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white transition-width duration-300 shadow-lg z-50 flex flex-col justify-between`}
    >
      {/* Sidebar Header */}
      <div>
        <div className="flex items-center justify-between mt-4">
          <h1
            className={`text-2xl font-bold ml-2 text-green-500 ${isOpen ? "block" : "hidden"
              } md:block`}
          >
            Smart <span className="text-yellow-400">Cricket</span>
          </h1>
          <div className="cursor-pointer md:hidden" onClick={toggleSidebar}>
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </div>
        </div>

        {/* Sidebar Navigation */}
        <ul className="flex flex-col text-xl mt-6 space-y-2">
          {[
            {
              path: "/TeamManagement/MainDashboard",
              icon: <FaHome />,
              label: "Dashboard",
            },
            {
              path: "/TeamManagement/PlayerStatistics",
              icon: <FaUsers />,
              label: "Player Stats",
            },
            {
              path: "/TeamManagement/TeamSchedule",
              icon: <FaRegClock />,
              label: "Team Schedule",
            },
            {
              path: "/TeamManagement/SuggestPlayingXI",
              icon: <FaListAlt />,
              label: "Suggest Playing XI",
            },
            {
              path: "/TeamManagement/TeamOpponentAnalysis",
              icon: <FaFistRaised />,
              label: "Opponent Team Analysis",
            }, {
              path: "/TeamManagement/TeamOpponentAnalysis",
              icon: <FaFistRaised />,
              label: "Opponent Team Analysis",
            },
          ].map((item, index) => (
            <li
              key={index}
              className={`flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive(item.path) ? "bg-[#00A09A] text-white" : ""
                }`}
            >
              <Link to={item.path} className="flex items-center w-full">
                <span className="text-2xl">{item.icon}</span>
                <span
                  className={`ml-2 ${isOpen ? "inline" : "hidden"
                    } md:inline text-base`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar Footer */}
      <div
        className={`p-4 bg-[#00A09A] text-white rounded ${isOpen ? "block" : "hidden"
          } md:block`}
      >
        <div className="flex items-center">
          <FaUser className="text-3xl" />
          <div className="ml-2">
            <p className="text-lg font-bold">Your Manager</p>
            <p className="text-sm">manager@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
