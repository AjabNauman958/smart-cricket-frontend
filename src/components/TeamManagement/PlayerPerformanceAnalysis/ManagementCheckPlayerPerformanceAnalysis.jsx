import React from 'react';

import SelectRecentMatches from './SelectRecentMatches';
import ThemeContextProvider from '../../context/ThemeContextProvider';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import DashboardNavbar from '../../Player/DashboardNavbar';

const ManagementCheckPlayerPerformanceAnalysis = () => {
    return (
        <div>
            <ThemeContextProvider>
                <div>
                    <Sidebar />
                    <div className='grow ml-16 md:ml-64  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap'>
                        <DashboardNavbar />
                        <div>
                            <div className="flex justify-center items-center  bg-white dark:bg-gray-900 dark:text-white dark:shadow-2xl">

                                <h1 className="  p-3 text-2xl ">
                                    <span className="text-green-500 font-semibold"> Player </span>
                                    Performance Analysis
                                </h1>
                            </div>
                        </div>
                        <div className='min-h-screen'>
                            <SelectRecentMatches/>
                        </div>
                        <div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </ThemeContextProvider>
        </div>
    );
}

export default ManagementCheckPlayerPerformanceAnalysis;
