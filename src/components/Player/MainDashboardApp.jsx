import React from 'react';
import ThemeContextProvider from '../context/ThemeContextProvider';
import Sidebar from './Sidebar';
import DashboardNavbar from './DashboardNavbar';
import WelcomeMessage from './WelcomeMessage';
import PlayerProfileCard from './PlayerProfileCard';
import PlayerProfileDetails from './PlayerProfileDetails';
import PlayerCareerStats from './PlayerCareerStats';
import AverageGraph from './AverageGraph';

const MainDashboardApp = () => {
  return (
    <div>
      <ThemeContextProvider>
       
<div className="flex ">
    <Sidebar/>
    <div className='grow ml-16 md:ml-64  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white'>
        <DashboardNavbar/>
        <WelcomeMessage/>
        <div className='mt-9 ml-6 flex flex-wrap'>
          <PlayerProfileCard/> 
          <PlayerProfileDetails/>
        </div>
        <div>
          <PlayerCareerStats/>
        </div>
        <div>
          <AverageGraph/>
        </div>
</div>
</div>

      </ThemeContextProvider>
    </div>
  );
}

export default MainDashboardApp;
