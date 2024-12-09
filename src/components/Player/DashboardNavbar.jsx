import React, { useContext, useState, useRef, useEffect } from 'react';
import { FaMoon, FaSun, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContextProvider';
import { Link, useLocation } from 'react-router-dom';
import playerImage from '../images/shaheen.jpeg';
import '../Player/css/DashboardNavbar.css';

const DashboardNavbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const user = { name: "Shaheen Shah Afridi", email: "shaheenshah@gmail.com", profileImage: playerImage };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Extract current route for display
  const currentPath = location.pathname.replace('/Player', 'PlayerDashboard');

  return (
    <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
      {/* Left side: Display route name */}
      <h1 className='sm:text-sm text-gray-600 dark:text-white ml-5'>
        {currentPath}
      </h1>

      {/* Right side: Theme toggle and profile */}
      <div className="flex items-center space-x-4 relative">
        <button className='text-3xl' onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        <div className="relative">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={toggleDropdown}
            tabIndex={0} // Ensures it is focusable
          >
            <img
              src={user.profileImage}
              alt="User Profile"
              className="w-12 h-12 rounded-full border-[3px] hover:border-green-800 duration-300 "
            />
          </div>
          {dropdownOpen && (
            <ul
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50"
            >
              <div className='flex items-center justify-center mt-6'>
                <img
                  src={user.profileImage}
                  alt="User Profile"
                  className="w-12 h-12 rounded-full"
                />
              </div>
              <li className="flex items-center p-4 border-b border-gray-200 dark:border-gray-600">
                <div className="ml-3">
                  <div className="font-semibold text-lg">{user.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 hover:text-green-500 cursor-pointer dark:hover:text-green-500">{user.email}</div>
                </div>
              </li>
              <li>
                <Link to='/PlayerProfile' className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-500">
                  <FaUser className="inline-block mr-2" />
                  Profile
                </Link>
              </li>
              <li>
                <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-500">
                  <FaSignOutAlt className="inline-block mr-2" />
                  Logout
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
