import React, { useState } from 'react';
import {
  FaHome, FaRegClock, FaChartLine, FaChartBar, FaFistRaised, FaUser, FaBars, FaTimes, FaUsers, FaListAlt
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to check if the current link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className={`bg-gray-100 text-gray-900 h-screen px-4 fixed ${isOpen ? 'w-72' : 'w-20'} md:w-64 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white transition-width duration-300 shadow-lg z-50 `}>
      <div className="flex items-center justify-center gap-3 mt-5">
        <div className="cursor-pointer md:hidden" onClick={toggleSidebar}>
          {isOpen ? <FaTimes className='text-2xl text-gray-500' /> : <FaBars className='text-2xl text-gray-500' />}
        </div>
      </div>
      <div className="text-center mt-4">

        <img src={logo} alt="Logo" className={`rounded-full ${isOpen ? 'block' : 'hidden'} md:block w-32 mx-auto `} />
        <h1 className={`text-2xl font-bold ml-2 text-yellow-500  ${isOpen ? 'block' : 'hidden'} md:block`}>Smart <span className='text-green-600'> Cricket</span></h1>
      </div>
      <ul className="flex flex-col text-xl mt-4 justify-center gap-2">
        <li className={`flex items-center justify-start py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamDashboard") ? 'bg-[#00A09A] text-white' : ''}`}>
          <Link to="/TeamDashboard" className="flex items-center ">
            <FaHome className='text-2xl text-gray-500' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Dashboard</span>
          </Link>
        </li>
        <li className={`flex items-center justify-start py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamPlayerStatistics") ? 'bg-[#00A09A] text-white' : ''}`}>
          <Link to="/TeamPlayerStatistics" className="flex items-center">
            <FaUsers className='text-2xl text-gray-500' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Player Stats</span>
          </Link>
        </li>
        <li className={`flex items-center justify-start  py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamSchedule") ? 'bg-[#00A09A] text-white' : ''}`}>
          <Link to="/TeamSchedule" className="flex items-center  ">
            <FaRegClock className='text-2xl text-gray-500' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Team Schedule</span>
          </Link>
        </li>

        <li className={`flex items-center py-3 justify-start  px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamCheckPlayerPerformancePrediction") ? 'bg-[#00A09A] text-white' : ''} group`}>
          <div className="dropdown dropdown-right flex items-center ">
            <Link className="flex items-center  ">
              <FaChartLine className='text-2xl text-gray-500 ' />
              <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} tabIndex={0} role="button" className="btn " md:inline text-base `}>Performance Prediction</span>
            </Link>
            {/* Dropdown menu */}
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow dark:bg-gray-800 group-hover:block hidden">
              <li className={`hover:text-black text-black ${isActive("/TeamCheckPlayerPerformancePrediction") ? 'bg-[#00A09A] text-white' : ''}`}>
                <Link to="/TeamCheckPlayerPerformancePrediction" className='dark:hover:text-yellow-300'> Player's Performance Prediction</Link>
              </li>
              <li className={`hover:text-black text-black ${isActive("/TeamPerformancePrediction") ? 'bg-[#00A09A] text-white' : ''}`}>
                <Link to="/TeamPerformancePrediction " className='dark:hover:text-yellow-300'> Team's Performance Prediction</Link>
              </li>
            </ul>
          </div>
        </li>

        <li className={`flex items-center justify-start  py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamPlayerPerformanceAnalysis") ? 'bg-[#00A09A] text-white' : ''} group`}>
          <div className="dropdown dropdown-right flex items-center">
            <Link className="flex items-center ">
              <FaChartBar className='text-2xl text-gray-500' />
              <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} tabIndex={0} role="button" className="btn " md:inline text-base`}>Performance Analysis</span>
            </Link>
            {/* Dropdown menu */}
            <ul className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow dark:bg-gray-800 group-hover:block hidden">
              <li className={`hover:text-black text-black ${isActive("/TeamPlayerPerformanceAnalysis") ? 'bg-[#00A09A] text-white' : ''}`}>
                <Link to="/TeamPlayerPerformanceAnalysis" className='dark:hover:text-yellow-300 '> Player's Performance Analysis</Link>
              </li>
              <li className={`hover:text-black text-black ${isActive("/TeamPerformanceAnalysis") ? 'bg-[#00A09A] text-white' : ''}`}>
                <Link to="/TeamPerformanceAnalysis" className='dark:hover:text-yellow-300'> Team's Performance Analysis</Link>
              </li>
            </ul>
          </div>
        </li>


        <li className={`flex py-3 justify-start items-center px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamSuggestPlayingXI") ? 'bg-[#00A09A] text-white' : ''}`}>
          <Link to="/TeamSuggestPlayingXI" className="flex items-center">
            <FaListAlt className='text-2xl text-gray-500' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Suggest Playing XI</span>
          </Link>
        </li>

        <li className={`flex items-center justify-start py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300 ${isActive("/TeamOpponentAnalysis") ? 'bg-[#00A09A] text-white' : ''}`}>
          <Link to="/TeamOpponentAnalysis" className="flex items-center ">
            <FaFistRaised className='text-2xl text-gray-500' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Opponent Team Analysis</span>
          </Link>
        </li>
      </ul>

      {/*  */}
    </div>
  );
};

export default Sidebar;
