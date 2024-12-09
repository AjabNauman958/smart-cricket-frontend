import React from 'react';
import { FaSmile } from 'react-icons/fa';
import welcomeImage from '../../images/welcomeimage.png';

const WelcomeMessage = () => {
  // Hardcoded user data
  const userName = 'Shaheen Shah Afridi';

  return (
    <div className="flex flex-col md:flex-row items-center justify-around bg-[#00A09A] text-white p-6 rounded-lg shadow-lg dark:text-white" style={{ flexWrap: 'wrap' }} >
      {/* Left Div */}
      <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 md:w-1/2 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
          <FaSmile className="text-4xl text-white" />
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">Welcome, {userName}!</h1>
        </div>
        <p className="text-sm sm:text-md md:text-lg lg:text-lg mb-4">
          We're excited to have you on our team. Let's achieve great things together!
        </p>
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <h2 className="text-sm sm:text-md md:text-lg lg:text-xl font-bold">
            Get to Know In-Depth Cricket Profile and Career Milestones
          </h2>
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
