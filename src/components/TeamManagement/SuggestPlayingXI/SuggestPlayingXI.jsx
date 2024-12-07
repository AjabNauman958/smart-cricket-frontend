import React from 'react';
import ThemeContextProvider from '../../context/ThemeContextProvider';
import Sidebar from '../Sidebar/Sidebar';
import DashboardNavbar from '../../Player/DashboardNavbar';
import Footer from '../Footer/Footer';
import SuggestElevenDetails from './SuggestElevenDetails';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SuggestPlayingXI = () => {
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
        <ThemeContextProvider>
            <div className="flex">
                <AnimatedComponent>
                    {/* Sidebar */}
                    <Sidebar />
                </AnimatedComponent>
                {/* Main Content Area */}
                <div className="flex-grow ml-16 md:ml-64 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col min-h-screen">
                    <DashboardNavbar />

                    {/* Header */}
                    <AnimatedComponent>
                        <div className="flex justify-center items-center bg-white dark:bg-gray-900 dark:text-white dark:shadow-2xl py-4">
                            <h1 className="text-2xl font-semibold">
                                <span className="text-green-500">Suggest</span> Playing{' '}
                                <span className="text-yellow-400">XI</span>
                            </h1>
                        </div>
                    </AnimatedComponent>

                    {/* Main Content */}
                    <div className="flex-grow">
                        <AnimatedComponent>

                            <SuggestElevenDetails />
                        </AnimatedComponent>
                    </div>

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
        </ThemeContextProvider>
    );
};

export default SuggestPlayingXI;
