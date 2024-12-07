import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContextProvider from "../../context/ThemeContextProvider";
import Sidebar from "../Sidebar/Sidebar";
import DashboardNavbar from "../../Player/DashboardNavbar";
import Footer from "../Footer/Footer";
import AnalysisDetails from "./AnalysisDetails";

const TeamOpponentAnalysis = () => {
    // Animation Variants
    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    // Animated Component Wrapper
    const AnimatedComponent = ({ children }) => {
        const [ref, inView] = useInView({
            threshold: 0.2, // Trigger when 20% is visible
            triggerOnce: true, // Trigger animation only once
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
                <Sidebar />
                <div className="grow ml-16 md:ml-64 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white flex-wrap min-h-screen">
                    <DashboardNavbar />

                    {/* Page Header */}
                    <AnimatedComponent>
                        <div className="flex justify-center items-center bg-white dark:bg-gray-900 dark:text-white dark:shadow-2xl">
                            <h1 className="p-3 text-2xl">
                                <span className="text-green-500 font-semibold"> Opponent </span>
                                Team <span className="text-yellow-400 font-semibold">Analysis</span>
                            </h1>
                        </div>
                    </AnimatedComponent>

                    {/* Analysis Details */}
                    <AnimatedComponent>
                        <div className="min-h-screen">
                            <AnalysisDetails />
                        </div>
                    </AnimatedComponent>

                    {/* Footer */}
                    <AnimatedComponent>
                        <Footer />
                    </AnimatedComponent>
                </div>
            </div>
        </ThemeContextProvider>
    );
};

export default TeamOpponentAnalysis;
