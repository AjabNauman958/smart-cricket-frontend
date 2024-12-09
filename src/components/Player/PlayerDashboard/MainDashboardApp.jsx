import React from "react";
import ThemeContextProvider from "../../context/ThemeContextProvider";
import Sidebar from "../Sidebar";
import DashboardNavbar from "../DashboardNavbar";
import WelcomeMessage from "./WelcomeMessage";
import PlayerProfileCard from "./PlayerProfileCard";
import PlayerProfileDetails from "./PlayerProfileDetails";
import PlayerCareerStats from "./PlayerCareerStats";
import AverageGraph from "./AverageGraph";
import TeamScheduleDashboard from "../TeamSchedule/TeamScheduleDashboard";
import Footer from "../Footer";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const MainDashboardApp = () => {

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

            <Sidebar />
          </AnimatedComponent>
          <div
            className="grow  ml-16 md:ml-64  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap"
          >
            <AnimatedComponent>

              <DashboardNavbar />
            </AnimatedComponent>
            <div className="grow p-10   bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap">

              <AnimatedComponent>

                <WelcomeMessage />
              </AnimatedComponent>
            </div>
            <div className="mt-9 ml-6 flex flex-wrap justify-center items-center">
              <AnimatedComponent>

                <PlayerProfileCard />
              </AnimatedComponent>
              <AnimatedComponent>

                <PlayerProfileDetails />
              </AnimatedComponent>
            </div>
            <div className="flex-wrap">
              <AnimatedComponent>

                <PlayerCareerStats />
              </AnimatedComponent>
            </div>
            <div>
              <AnimatedComponent>

                <AverageGraph />
              </AnimatedComponent>
            </div>
            <div>
              <h1 className='text-4xl font-semibold text-center mt-5'>
                <span className='text-green-500'>Team </span> Schedule
              </h1>
              <AnimatedComponent>

                <TeamScheduleDashboard league="recent" />
              </AnimatedComponent>
              <AnimatedComponent>

                <TeamScheduleDashboard league="upcoming" />
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

export default MainDashboardApp;
