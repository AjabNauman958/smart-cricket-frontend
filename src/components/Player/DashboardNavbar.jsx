import React, { useContext, useState, useRef, useEffect } from 'react';
import { FaMoon, FaSun, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContextProvider';
import playerImage from '../images/babar.png';
import '../Player/css/DashboardNavbar.css';

const DashboardNavbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const user = { name: "John Doe", email: "john.doe@example.com", profileImage: playerImage };

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

  return (
    <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
      <h1 className='text-2xl font-bold'></h1>
      <div className="flex items-center space-x-4 relative">
        <button className='text-2xl' onClick={toggleTheme}>
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
              className="w-10 h-10 rounded-full border-[3px] hover:border-gray-300 duration-300 "
            />
          </div>
          {dropdownOpen && (
            <ul
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg z-50"
              style={{ transition: 'opacity 0.3s ease, transform 0.3s ease', opacity: dropdownOpen ? 1 : 0, transform: dropdownOpen ? 'translateY(0)' : 'translateY(-10px)' }}
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
                <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-500">
                  <FaUser className="inline-block mr-2" />
                Profile
                </a>
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
