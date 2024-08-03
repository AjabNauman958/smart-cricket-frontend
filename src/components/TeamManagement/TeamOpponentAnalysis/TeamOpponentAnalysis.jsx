import React from 'react';
import ThemeContextProvider from '../../context/ThemeContextProvider';
import Sidebar from '../Sidebar/Sidebar';
import DashboardNavbar from '../../Player/DashboardNavbar';
import Footer from '../Footer/Footer';
import AnalysisDetails from './AnalysisDetails';

const TeamOpponentAnalysis = () => {
  return (
    <ThemeContextProvider>
    <div className="flex">
        <Sidebar />
        <div className="grow ml-16 md:ml-64 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white flex-wrap">
            <DashboardNavbar />
            <div>
                <div className='flex justify-center items-center bg-white dark:bg-gray-900 dark:text-white dark:shadow-2xl'>
                    <h1 className='p-3 text-2xl'>
                        <span className='text-green-500 font-semibold'> Opponent </span> Team <span className='text-yellow-400 font-semibold'>Analysis</span> 
                    </h1>
                </div>
<div className='min-h-screen'>
<AnalysisDetails/>
    </div>                
            </div>
            <Footer />
        </div>
    </div>
</ThemeContextProvider>
  );
}

export default TeamOpponentAnalysis;
