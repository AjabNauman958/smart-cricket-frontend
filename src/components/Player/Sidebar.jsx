import React from 'react';
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Sidebar = () => {
  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white transition-width duration-300 rounded-lg shadow-lg">
      <div className="flex items-center justify-center mt-4">
        <h1 className="text-2xl font-bold hidden md:block ml-2 italic">SmartCricket</h1>
      </div>
      <div className="flex justify-center mt-4">
        <img src={logo} alt="Logo" className="w-24 h-24 rounded-full md:w-40 md:h-40" />
      </div>
      <ul className="flex flex-col text-xl mt-4">
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <FaTachometerAlt />
          <Link to="/dashboard" className="hidden md:inline">Dashboard</Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <FaShoppingCart />
          <Link to="/team-schedule" className="hidden md:inline">Team Schedule</Link>
        </li> <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <FaShoppingCart />
          <Link to="/team-schedule" className="hidden md:inline">Team Schedule</Link>
        </li>
      
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <FaUser />
          <Link to="/users" className="hidden md:inline">Users</Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <FaBox />
          <Link to="/products" className="hidden md:inline">Products</Link>
        </li>
        <li className="flex items-center py-3 px-2 space-x-4 hover:bg-[#00A09A] hover:text-white rounded transition-all duration-300">
          <FaCog />
          <Link to="/settings" className="hidden md:inline">Settings</Link>
        </li>
      </ul>
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-r from-blue-500 to-green-500 text-white">
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
