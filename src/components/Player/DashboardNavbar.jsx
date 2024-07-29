import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContextProvider';
import playerImage from '../images/babar.png'
const DashboardNavbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const user = { name: "John Doe", profileImage: playerImage   }; // Replace with real user data

  return (
    <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <div className="flex items-center space-x-4">
        <button className='text-2xl' onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>
        <div className="flex items-center space-x-2">
          <img 
            src={user.profileImage} 
            alt="User Profile" 
            className="w-10 h-10 rounded-full border-[3px]" 
          />
          <span className="hidden md:inline text-lg">{user.name}</span>
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
