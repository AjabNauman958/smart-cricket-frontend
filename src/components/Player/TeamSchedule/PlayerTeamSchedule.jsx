import React from 'react';
import Sidebar from '../Sidebar';
import ThemeContextProvider from '../../context/ThemeContextProvider';
import DashboardNavbar from '../DashboardNavbar';
import RecentMatches from './RecentMatches';
import UpcomingMatches from './UpcomingMatches';
import Footer from '../Footer';
import Pakistan from '../../images/pak.png'

const PlayerTeamSchedule = () => {
    return (

        <div>
            <ThemeContextProvider>
                <div>
                    <Sidebar />
                    <div className="grow ml-16 md:ml-64  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap">
                        <DashboardNavbar />
                        <div >
                            <div className='flex justify-center items-center  bg-white dark:bg-gray-900 dark:text-white dark:shadow-2xl'>
                                <div> <img src={Pakistan} className='w-10 h-auto ' alt="" /></div>
                                <h1 className='  p-3 text-2xl '><span className='text-green-500 font-semibold'> Pakistan </span> Cricket Schedule</h1>
                            </div>
                            <h1 className=' mt-7 text-2xl w-[18rem] rounded text-center m-auto bg-yellow-400 p-1 text-white font-semibold' >Upcoming Matches</h1>
                            <div>
                                <UpcomingMatches />
                                <UpcomingMatches />
                            </div>
                        </div>
                        <div className='mt-12 space-y-7'>
                            <h1 className=' mt-7 text-2xl w-[13rem] rounded text-center m-auto bg-yellow-400 p-1 text-white font-semibold' >Recent Matches</h1>
                            <div>
                                <RecentMatches />
                                <RecentMatches />
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </ThemeContextProvider>
        </div>
    );
}

export default PlayerTeamSchedule;
