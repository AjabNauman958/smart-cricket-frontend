import React from 'react';
import ThemeContextProvider from '../../context/ThemeContextProvider';
import Sidebar from '../Sidebar';
import DashboardNavbar from '../DashboardNavbar';
import Footer from '../Footer';
import FaqsDetail from './FaqsDetail';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const PlayerFaqs = () => {
    // Animation Variants
    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    // Reusable Animated Component
    const AnimatedComponent = ({ children }) => {
        const [ref, inView] = useInView({
            threshold: 0.2, // Trigger when 20% is visible
            triggerOnce: true, // Animate only once
        });

        return (
            <motion.div
                ref={ref}
                variants={fadeInVariant}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {children}
            </motion.div>
        );
    };
    return (
        <>
            <ThemeContextProvider>
                <div>
                    <AnimatedComponent>

                        <Sidebar />
                    </AnimatedComponent>
                    <div className='grow ml-16 md:ml-64  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap'>
                        <AnimatedComponent>

                            <DashboardNavbar />
                        </AnimatedComponent>

                        <div>
                            <h1 className="dark:text-white dark:bg-gray-900 bg-white p-3 text-2xl text-center">
                                <span className="text-green-500 font-semibold"> Frequently   </span>
                                Asked <span className='text-yellow-500 font-semibold'>Questions</span>
                            </h1>

                        </div>
                        <div className='min-h-screen'>
                            <AnimatedComponent>

                                <FaqsDetail />
                            </AnimatedComponent>

                        </div>
                        <div>
                            <AnimatedComponent>

                                <Footer />
                            </AnimatedComponent>
                        </div>
                    </div>
                </div>
            </ThemeContextProvider>

        </>
    );
}

export default PlayerFaqs;
