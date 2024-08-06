import React from 'react';
import Pakistan from '../../images/pak.png';
import ThemeContextProvider from '../../context/ThemeContextProvider';
import Sidebar from '../Sidebar/Sidebar';
import DashboardNavbar from '../../Player/DashboardNavbar';
import UpcomingMatches from './UpcomingMatches';
import RecentMatches from './RecentMatches';
import Footer from '../Footer/Footer';

const TeamSchedule = () => {
    return (
        <ThemeContextProvider>
            <div className="flex">
                <Sidebar />
                <div className="grow ml-16 md:ml-64 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white flex-wrap">
                    <DashboardNavbar />
                    <div>
                        <div className='flex justify-center items-center bg-white dark:bg-gray-900 dark:text-white dark:shadow-2xl'>
                            <img src={Pakistan} className='w-10 h-auto' alt="Pakistan flag" />
                            <h1 className='p-3 text-2xl'>
                                <span className='text-green-500 font-semibold'>Pakistan </span> Cricket <span className='text-yellow-400 font-semibold'> Schedule</span>
                            </h1>
                        </div>
                        <h1 className='mt-7 text-2xl w-[18rem] rounded text-center m-auto bg-yellow-400 p-1 text-white font-semibold'>Upcoming Matches</h1>
                        <div>
                            <UpcomingMatches />
                            <UpcomingMatches />
                        </div>
                    </div>
                    <div className='mt-12 space-y-7'>
                        <h1 className='mt-7 text-2xl w-[13rem] rounded text-center m-auto bg-yellow-400 p-1 text-white font-semibold'>Recent Matches</h1>
                        <div>
                            <RecentMatches />
                            <RecentMatches />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </ThemeContextProvider>
    );
}

export default TeamSchedule;
