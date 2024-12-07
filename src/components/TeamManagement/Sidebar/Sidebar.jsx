import React, { useState } from 'react';
import {
  FaHome, FaRegClock, FaChartLine, FaChartBar, FaFistRaised, FaUser, FaBars, FaTimes, FaUsers, FaListAlt
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className={`bg-gray-100 text-gray-900 h-screen px-4 fixed ${isOpen ? 'w-72' : 'w-16'} md:w-64 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white transition-width duration-300 shadow-lg z-50`}>
      <div className="flex items-center justify-between mt-4">
        <h1 className={`text-2xl font-bold ml-2 text-green-500  ${isOpen ? 'block' : 'hidden'} md:block`}>Smart <span className='text-yellow-400'> Cricket</span></h1>
        <div className="cursor-pointer md:hidden" onClick={toggleSidebar}>
          {isOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
        </div>
      </div>

      <ul className="flex flex-col text-xl mt-4">
        <li className={`flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamManagement/MainDashboard") ? 'bg-[#00A09A] text-white' : ''}`}>
          <Link to="/TeamManagement/MainDashboard" className="flex items-center w-full">
            <FaHome className='text-2xl' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Dashboard</span>
          </Link>
        </li>
        <li className={`flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamManagement/PlayerStatistics") ? 'bg-[#00A09A] text-white' : ''}`}>
          <Link to="/TeamManagement/PlayerStatistics" className="flex items-center w-full">
            <FaUsers className='text-2xl' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Player Stats</span>
          </Link>
        </li>
        <li className={`flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamManagement/TeamSchedule") ? 'bg-[#00A09A] text-white' : ''}`}>
          <Link to="/TeamManagement/TeamSchedule" className="flex items-center w-full ">
            <FaRegClock className='text-2xl' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Team Schedule</span>
          </Link>
        </li>

        <li className={`flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamManagement/ManagementCheckPlayerPerformancePrediction") ? 'bg-[#00A09A] text-white' : ''} group`}>
          <div className="dropdown dropdown-right flex items-center w-full">
            <Link className="flex items-center w-full ">
              <FaChartLine className='text-2xl ' />
              <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} tabIndex={0} role="button" className="btn " md:inline text-base `}>Performance Prediction</span>
            </Link>
            {/* Dropdown menu */}
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow dark:bg-gray-800 group-hover:block hidden">
              <li className={`hover:text-black text-black ${isActive("/TeamManagement/ManagementCheckPlayerPerformancePrediction") ? 'bg-[#00A09A] text-white' : ''}`}>
                <Link to="/TeamManagement/ManagementCheckPlayerPerformancePrediction" className='dark:hover:text-yellow-300'> Player's Performance Prediction</Link>
              </li>
              <li className={`hover:text-black text-black ${isActive("/TeamManagement/TeamPerformancePrediction") ? 'bg-[#00A09A] text-white' : ''}`}>
                <Link to="/TeamManagement/TeamPerformancePrediction" className='dark:hover:text-yellow-300'> Team's Performance Prediction</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className={`flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamManagement/PlayerPerformanceAnalysis") ? 'bg-[#00A09A] text-white' : ''} group`}>
          <div className="dropdown dropdown-right flex items-center w-full">
            <Link className="flex items-center w-full ">
              <FaChartBar className='text-2xl' />
              <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} tabIndex={0} role="button" className="btn " md:inline text-base`}>Performance Analysis</span>
            </Link>
            {/* Dropdown menu */}
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow dark:bg-gray-800 group-hover:block hidden">
              <li className={`hover:text-black text-black ${isActive("/TeamManagement/PlayerPerformanceAnalysis") ? 'bg-[#00A09A] text-white' : ''}`}>
                <Link to="/TeamManagement/PlayerPerformanceAnalysis" className='dark:hover:text-yellow-300 '> Player's Performance Analysis</Link>
              </li>
              <li className={`hover:text-black text-black ${isActive("/TeamManagement/TeamPerformanceAnalysis") ? 'bg-[#00A09A] text-white' : ''}`}>
                <Link to="/TeamManagement/TeamPerformanceAnalysis" className='dark:hover:text-yellow-300'> Team's Performance Analysis</Link>
              </li>
            </ul>
          </div>
        </li>


        <li className={`flex py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamManagement/SuggestPlayingXI") ? 'bg-[#00A09A] text-white' : ''}`}>
          <Link to="/TeamManagement/SuggestPlayingXI" className="flex items-center w-full">
            <FaListAlt className='text-2xl' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Suggest Playing XI</span>
          </Link>
        </li>

        <li className={`flex py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamManagement/TeamOpponentAnalysis") ? 'bg-[#00A09A] text-white' : ''}`}>
          <Link to="/TeamManagement/TeamOpponentAnalysis" className="flex items-center w-full">
            <FaFistRaised className='text-2xl' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Opponent Team Analysis</span>
          </Link>
        </li>
      </ul>

      <div className={`absolute bottom-0 left-0 w-full p-4 bg-[#00A09A] text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex items-center justify-center">
          <FaUser className="w-8 h-8" />
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
