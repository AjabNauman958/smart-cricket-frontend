import React from 'react';
import ThemeContextProvider from '../../context/ThemeContextProvider';
import Sidebar from '../Sidebar';
import DashboardNavbar from '../DashboardNavbar';
import Footer from '../Footer';
import ComparisonDetails from './ComparisonDetails'
const PlayerOpponentComparison = () => {
    return (
        <>
            <ThemeContextProvider>
                <div>
                    <Sidebar />
                    <div className='grow ml-16 md:ml-64  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap'>
                        <DashboardNavbar />
                        <div>
                            <div>
                                <h1 className="dark:text-white dark:bg-gray-900 bg-white p-3 text-2xl text-center">
                                    <span className="text-green-500 font-semibold"> Player </span>
                                    Opponent <span className='text-yellow-500 font-semibold'>Analysis</span>
                                </h1>
                            </div>
                        </div>
                        <div className='min-h-screen'>
<ComparisonDetails/>
                        </div>
                        <div>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </ThemeContextProvider>

        </>
    );
}

export default PlayerOpponentComparison;
