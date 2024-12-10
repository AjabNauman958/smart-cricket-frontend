import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ThemeContextProvider from "../../context/ThemeContextProvider";
import Sidebar from "../Sidebar/Sidebar";
import DashboardNavbar from "../../Player/DashboardNavbar";
import WelcomeMessage from "./WelcomeMessage";
import TeamProfileDetails from "./TeamProfileDetails";
import Footer from "../Footer/Footer";
import TeamScheduleDashboard from "../../Player/TeamSchedule/TeamScheduleDashboard";
import RecentSquad from "./RecentSquad";

const MainDashboard = () => {
  // Animation Variants
  const fadeInVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Utility Hook for Viewport Detection
  const AnimatedComponent = ({ children }) => {
    const [ref, inView] = useInView({
      threshold: 0.2, // Trigger when 20% of the component is visible
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
        <div className="grow ml-16 md:ml-64 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col min-h-screen">
          <DashboardNavbar />

          {/* Welcome Message */}
          <AnimatedComponent>
            <div className="mx-4 p-4 mt-4 flex-grow">
              <WelcomeMessage />
            </div>
          </AnimatedComponent>

          {/* Team Profile Details */}
          <AnimatedComponent>
            <div className="mt-9 p-4 flex flex-wrap justify-center">
              <div className="w-full max-w-5xl px-4">
                <TeamProfileDetails />
              </div>
            </div>
          </AnimatedComponent>

          {/* Team Schedule */}
          <AnimatedComponent>
            <div>
              <h1 className="text-4xl font-semibold text-center mt-5">
                <span className="text-green-500">Team</span> Schedule
              </h1>
              <TeamScheduleDashboard league="recent" />
              <TeamScheduleDashboard league="upcoming" />
            </div>
          </AnimatedComponent>

          {/* Recent Squad */}
          <AnimatedComponent>
            <div>
              <h1 className="text-4xl font-semibold text-center mt-5">
                <span className="text-green-500">Recent</span> Squad
              </h1>
              <RecentSquad />
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

export default MainDashboard;
