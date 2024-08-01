import React from 'react';
import ThemeContextProvider from '../../context/ThemeContextProvider';
import Sidebar from '../Sidebar';
import DashboardNavbar from '../DashboardNavbar';
import Footer from '../Footer';
import FaqsDetail from './FaqsDetail';


const PlayerFaqs = () => {
    return (
        <>
             <ThemeContextProvider>
                <div>
                    <Sidebar />
                    <div className='grow ml-16 md:ml-64  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap'>
                        <DashboardNavbar />
                       
                            <div>
                                <h1 className="dark:text-white dark:bg-gray-900 bg-white p-3 text-2xl text-center">
                                    <span className="text-green-500 font-semibold"> Frequently   </span>
                                    Asked <span className='text-yellow-500 font-semibold'>Questions</span>
                                </h1>
                           
                        </div>
                        <div className='min-h-screen'>
<FaqsDetail/>
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

export default PlayerFaqs;
