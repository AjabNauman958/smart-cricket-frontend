import React from "react";
import ThemeContextProvider from "../../context/ThemeContextProvider";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AdminSidebar from "../Sidebar/AdminSidebar";
import Footer from "../../TeamManagement/Footer/Footer";
import DashboardNavbar from "../../Player/DashboardNavbar";


const AdminDashboard = () => {

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
        <div>
            <ThemeContextProvider>
                <div >
                    <AnimatedComponent>

                        <AdminSidebar />
                    </AnimatedComponent>
                    <div
                        className="grow min-h-screen  ml-16 md:ml-64  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap"
                    >
                        <AnimatedComponent>

                            <DashboardNavbar />
                        </AnimatedComponent>
                        <div className="grow p-10   bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap">

                            <AnimatedComponent>

                            </AnimatedComponent>
                        </div>
                        <div className="mt-9   ml-6 flex flex-wrap justify-center items-center">
                            <AnimatedComponent>

                            </AnimatedComponent>

                        </div>
                        <div className="flex-wrap">
                            <AnimatedComponent>

                            </AnimatedComponent>
                        </div>
                        <div>
                            <AnimatedComponent>

                            </AnimatedComponent>
                        </div>

                        <AnimatedComponent>

                            <Footer />
                        </AnimatedComponent>
                    </div>
                </div>
            </ThemeContextProvider>
        </div>
    );
};

export default AdminDashboard;
