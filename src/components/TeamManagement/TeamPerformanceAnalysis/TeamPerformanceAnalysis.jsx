import React from 'react';
import ThemeContextProvider from '../../context/ThemeContextProvider';
import Sidebar from '../Sidebar/Sidebar';
import DashboardNavbar from '../../Player/DashboardNavbar';
import Footer from '../Footer/Footer';
import TeamPerformanceAnalysisDetails from './TeamPerformanceAnalysisDetails';

const TeamPerformanceAnalysis = () => {
  return (
    <ThemeContextProvider>
    <div className="flex">
        <Sidebar />
        <div className="grow ml-16 md:ml-64 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white flex-wrap">
            <DashboardNavbar />
            <div>
                <div className='flex justify-center items-center bg-white dark:bg-gray-900 dark:text-white dark:shadow-2xl'>
                    <h1 className='p-3 text-2xl'>
                        <span className='text-green-500 font-semibold'> Team </span> Performance <span className='text-yellow-400 font-semibold'>Prediction</span> 
                    </h1>
                </div>
<div className='min-h-screen'>
<TeamPerformanceAnalysisDetails/>
    </div>                
            </div>
            <Footer />
        </div>
    </div>
</ThemeContextProvider>
  );
}

export default TeamPerformanceAnalysis;
