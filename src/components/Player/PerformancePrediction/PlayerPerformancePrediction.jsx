import React from 'react';
import ThemeContextProvider from '../../context/ThemeContextProvider';
import DashboardNavbar from '../DashboardNavbar';
import Sidebar from '../Sidebar';
import PredictionForm from './PredictionForm';

const PlayerPerformancePrediction = () => {
    return (
        <div>
            <ThemeContextProvider>
                <div>
                    <Sidebar />
                    <div className="grow ml-16 md:ml-64  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap">
                        <DashboardNavbar />
                        <div>
                            <div className='flex justify-center items-center  bg-white dark:bg-gray-900 dark:text-white dark:shadow-2xl'>
                                <h1 className='  p-3 text-2xl '><span className='text-green-500 font-semibold'> Player </span>Performance Prediction</h1>
                            </div>
                        </div>
                        <PredictionForm/>
                    </div>
                </div>
            </ThemeContextProvider>
        </div>
    );
}

export default PlayerPerformancePrediction;
