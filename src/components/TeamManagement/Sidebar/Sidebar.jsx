import React, { useState } from 'react';
import {
  FaHome, FaRegClock, FaChartLine, FaChartBar, FaFistRaised, FaUser, FaBars, FaTimes, FaUsers, FaQuestionCircle, FaUserFriends, FaPlay, FaTrophy, FaListAlt
} from 'react-icons/fa';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gray-100 text-gray-900 h-screen px-4 fixed ${isOpen ? 'w-72' : 'w-16'} md:w-64 border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white transition-width duration-300  shadow-lg z-50`}>
      <div className="flex items-center justify-between mt-4">
        <h1 className={`text-2xl font-bold ml-2 italic ${isOpen ? 'block' : 'hidden'} md:block`}>SmartCricket</h1>
        <div className="cursor-pointer md:hidden" onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {/* <img src={logo} alt="Logo" className={`rounded-full ${isOpen ? 'block' : 'hidden'} md:block`} /> */}
      </div>
      <ul className="flex flex-col text-xl mt-4">
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white  rounded transition-all duration-300">
          <Link to="/TeamManagement/MainDashboard" className="flex items-center w-full">
            <FaHome className='text-2xl' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Dashboard</span>
          </Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <Link to="/TeamManagement/PlayerStatistics" className="flex items-center w-full">
            <FaUsers className='text-2xl' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Player Stats</span>
          </Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <Link to="/TeamManagement/TeamSchedule" className="flex items-center w-full ">
            <FaRegClock className='text-2xl' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Team Schedule</span>
          </Link>
        </li>


        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <div className="dropdown dropdown-right flex items-center w-full">
            <Link className="flex items-center w-full ">
              <FaChartLine className='text-2xl ' />
              <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} tabIndex={0} role="button" className="btn "  md:inline text-base `}>Performance Prediction</span>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow dark:bg-gray-800">
                <li className='hover:text-black text-black'> <Link to="/TeamManagement/ManagementCheckPlayerPerformancePrediction" className='dark:hover:text-yellow-300'> Player's Performance Prediction</Link></li>

                <li className='hover:text-black text-black'> <Link to="/TeamManagement/TeamPerformancePrediction" className='dark:hover:text-yellow-300'> Team's Performance Prediction</Link> </li>
              </ul>
            </Link>
          </div>
        </li>

        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[rgb(0,160,154)] hover:text-white rounded transition-all duration-300">
          <div className="dropdown dropdown-right flex items-center w-full ">
            <Link className="flex items-center w-full ">
              <FaChartBar className='text-2xl' />
              <span className={` ml-2 ${isOpen ? 'inline' : 'hidden'} tabIndex={0} role="button" className="btn "  md:inline text-base`}>Performance Analysis</span>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow dark:bg-gray-800 ">
                <li className='hover:text-black text-black' > <Link to="/TeamManagement/PlayerPerformanceAnalysis" className='dark:hover:text-yellow-300 '> Player's Performance Analysis</Link></li>

                <li className='hover:text-black text-black'><Link to="/TeamManagement/TeamPerformanceAnalysis" className='dark:hover:text-yellow-300'> Team's Performance Analysis</Link> </li>
              </ul>
            </Link>
          </div>
        </li>
        <li className="flex py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <Link to="/TeamManagement/SuggestPlayingXI" className="flex items-center w-full">
            <FaListAlt className='text-2xl' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Suggest Playing XI</span>
          </Link>
        </li>
        <li className="flex py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <Link to="/TeamManagement/TeamOpponentAnalysis" className="flex items-center w-full">
            <FaFistRaised className='text-2xl' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Opponent Team Analysis</span>
          </Link>
        </li>
        <li className="flex py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <Link to="/Player/PlayerFaq" className="flex items-center w-full">
            <AiOutlineQuestionCircle className='text-2xl' />
            <span className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Faqs</span>
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
