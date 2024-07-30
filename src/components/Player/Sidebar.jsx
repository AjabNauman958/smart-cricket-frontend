import React, { useState } from 'react';
import { FaHome, FaRegClock, FaChartLine, FaChartBar, FaFistRaised, FaUser, FaBox, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-gray-100 text-gray-900 h-screen px-4 fixed ${isOpen ? 'w-64' : 'w-16'} md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white transition-width duration-300 rounded-lg shadow-lg z-50`}>
      <div className="flex items-center justify-between mt-4">
        <h1 className={`text-2xl font-bold ml-2 italic ${isOpen ? 'block' : 'hidden'} md:block`}>SmartCricket</h1>
        <div className="cursor-pointer md:hidden" onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24}  /> : <FaBars size={24} />}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <img src={logo} alt="Logo" className={`rounded-full ${isOpen ? 'block' : 'hidden'} md:block`} />
      </div>
      <ul className="flex flex-col text-xl mt-4">
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
        <FaHome className='text-2xl'/>
          <Link to="/Player/MainDashboardApp" className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Dashboard</Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
        <FaRegClock className='text-2xl'/>
          <Link to="/Player/PlayerTeamSchedule" className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Team Schedule</Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
        <FaChartLine className='text-2xl'/>
          <Link to="/Player/PlayerPerformancePrediction" className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Performance Prediction </Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
        <FaChartBar className='text-2xl'/>
          <Link to="/products" className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Performance Analysis </Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
        <FaFistRaised className='text-2xl'/>
          <Link to="/settings" className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Opponent Analysis</Link>
        </li> <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <FaCog className='text-2xl'/>
          <Link to="/faq" className={`ml-2 ${isOpen ? 'inline' : 'hidden'} md:inline text-base`}>Faqs </Link>
        </li>
      </ul>
      <div className={`absolute bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-500 to-green-500 text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
        <div className="flex items-center justify-center">
          <FaUser className="w-8 h-8" />
          <div className="ml-2">
            <p className="text-lg font-bold">User Name</p>
            <p className="text-sm">user@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
