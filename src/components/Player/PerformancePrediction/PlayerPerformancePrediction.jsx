import React from "react";
import ThemeContextProvider from "../../context/ThemeContextProvider";
import DashboardNavbar from "../DashboardNavbar";
import Sidebar from "../Sidebar";
import PredictionForm from "./PredictionForm";
import Footer from "../Footer";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const PlayerPerformancePrediction = () => {
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
        <div>
          <AnimatedComponent>

            <Sidebar />
          </AnimatedComponent>
          <div
            className="grow ml-16 md:ml-64  bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white flex-wrap"
          >
            <AnimatedComponent>

              <DashboardNavbar />
            </AnimatedComponent>
            <div>
              <div className="flex justify-center items-center  bg-white dark:bg-gray-900 dark:text-white dark:shadow-2xl">
                <h1 className="  p-3 text-2xl ">
                  <span className="text-green-500 font-semibold"> Player </span>
                  Performance Prediction
                </h1>
              </div>
            </div>
            <div className="min-h-screen">
              <AnimatedComponent>

                <PredictionForm />
              </AnimatedComponent>
            </div>
          </div>
          <div >
            <Footer />
          </div>
        </div>
      </ThemeContextProvider>
    </div>
  );
};

export default PlayerPerformancePrediction;
