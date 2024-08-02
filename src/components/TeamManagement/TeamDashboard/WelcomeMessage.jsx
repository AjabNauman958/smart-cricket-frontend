import React from 'react';
import { FaSmile } from 'react-icons/fa';
import welcomeImage from '../../images/welcomeimage.png';

const WelcomeMessage = () => {
  // Hardcoded user data
  const TeamName = ' Pakistan Cricket Team';

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#00A09A] text-white p-6 rounded-lg shadow-lg dark:text-white"style={{flexWrap:'wrap'}} >
      {/* Left Div */}
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:w-1/2 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
          <FaSmile className="text-4xl text-white" />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">Welcome, {TeamName}!</h1>
        </div>
       
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <h2 className="text-sm sm:text-md md:text-lg lg:text-xl font-bold">
          Time to chart the path to victory. Your expertise makes all the difference.          </h2>
        </div>
      </div>

      {/* Right Div */}
      <div className="flex-shrink-0 text-center md:text-left">
        <img 
          src={welcomeImage} 
          alt="Profile" 
          className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto mx-auto md:mx-0" 
        />
      </div>
    </div>
  );
}

export default WelcomeMessage;
