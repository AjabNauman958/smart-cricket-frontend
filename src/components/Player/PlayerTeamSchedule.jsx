import React from 'react';
import Sidebar from './Sidebar';
import ThemeContextProvider from '../context/ThemeContextProvider';
import DashboardNavbar from './DashboardNavbar';
import RecentMatches from './RecentMatches';
import UpcomingMatches from './UpcomingMatches';

const PlayerTeamSchedule = () => {
    return (
  
            <div>
                <ThemeContextProvider>
                    <div>
                        <Sidebar />

                        <div  className="grow ml-16 md:ml-64  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap">
<DashboardNavbar/>
<div className='mt-12 space-y-7'>

                            
                            <h1 className=' mt-7 text-2xl w-[13rem] rounded text-center m-auto bg-yellow-400 p-1 text-white font-semibold' >Recent Matches</h1>
                           

                            <div>
                                <RecentMatches/>
                                <RecentMatches/>
                            </div>




</div>

<div >
<h1 className=' mt-7 text-2xl w-[18rem] rounded text-center m-auto bg-yellow-400 p-1 text-white font-semibold' >Upcoming Matches</h1>
<div>
    <UpcomingMatches/>
    <UpcomingMatches/>
</div>
</div>
                        </div>
                        </div>
                </ThemeContextProvider>
            </div>
      
    
  );
}

export default PlayerTeamSchedule;
