import React, { useState } from 'react';
import { FaHome, FaRegClock, FaChartLine, FaChartBar, FaFistRaised, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Sidebar links data
  const links = [
    { to: "/Player/MainDashboardApp", icon: <FaHome />, label: "Dashboard" },
    { to: "/Player/PlayerTeamSchedule", icon: <FaRegClock />, label: "Team Schedule" },
    { to: "/Player/PlayerPerformancePrediction", icon: <FaChartLine />, label: "Performance Prediction" },
    { to: "/Player/PlayerPerformanceAnalysis", icon: <FaChartBar />, label: "Performance Analysis" },
    { to: "/Player/PlayerOpponentComparison", icon: <FaFistRaised />, label: "Opponent Analysis" },
    { to: "/Player/PlayerFaq", icon: <AiOutlineQuestionCircle />, label: "Faqs" }
  ];

  return (
    <div className={`bg-gray-100 text-gray-900 min-h-screen px-4 fixed ${isOpen ? 'w-72' : 'w-20'} md:w-64 border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white transition-width duration-300 shadow-lg z-50`}>
      <div className="flex items-center justify-center gap-3 text-center relative mt-5">
        <h1 className={`text-2xl font-bold  ${isOpen ? 'block' : 'hidden'} md:block`}>
          Smart <span className="text-green-600">Cricket</span>
        </h1>
        <div className="cursor-pointer  md:hidden " onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      <div className="flex items-center mt-4">
        <img src={logo} alt="Logo" className={`rounded-full ${isOpen ? 'block' : 'hidden'} md:block`} />
      </div>
      <ul className="flex flex-col text-xl mt-4">
        {links.map((item, index) => {
          const isActive = location.pathname === item.to; // Check if the current route matches the link

          return (
            <li
              key={index}
              className={`flex items-center justify-start   py-3 px-2 space-x-4 rounded transition-all duration-300 ${isActive ? 'bg-[#00A09A] text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              <Link to={item.to} className="flex items-center">
                {React.cloneElement(item.icon, { className: `${isOpen ? 'text-2xl' : 'text-3xl'} md:text-2xl` })}
                <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={`absolute bottom-0 left-0 w-full p-3 bg-[#00A09A] text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex items-center justify-center">
          <FaUser className="w-6 h-6" />
          <div className="ml-2">
            <p className="text-base font-bold">User Name</p>
            <p className="text-sm">user@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
