import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component
import backgroundImage from '../images/about.jpg'; // Adjust the path as necessary
import whoweare from '../images/whoweare.png'; // Adjust the path as necessary
import whatwedo from '../images/whatwedo.png'; // Adjust the path as necessary
import vision from '../images/vision.jpg'; // Adjust the path as necessary
import '../css/home.css'; // Import your CSS file
import OurTeam from './OurTeam';
import ScrollToTopButton from './scrollupbtn/ScrollToTopButton';
import { motion } from 'framer-motion';

const About = () => {
  const sections = [
    {
      heading: "Who We Are",
      text: "At Smart Cricket, we are a passionate team of cricket enthusiasts, data scientists, and technology experts dedicated to bringing the latest advancements in AI and machine learning to the cricketing world. Our goal is to offer a seamless, user-friendly experience for cricket lovers worldwide.",
      imgSrc: whoweare, // Use imported image path
      reverse: false,
    },
    {
      heading: "Our Mission",
      text: "Our mission is to revolutionize the way cricket is experienced and analyzed. We strive to provide cutting-edge insights and predictions that enhance the understanding and enjoyment of the game for fans, players, and analysts alike.",
      imgSrc: whatwedo, // Use imported image path
      reverse: true,
    },
    {
      heading: "Our Vision",
      text: "We envision a future where AI-driven analytics are an integral part of cricket strategy and fan engagement. By leveraging the power of data, we aim to uncover hidden patterns and trends that can transform the sport.",
      imgSrc: vision, // Use imported image path
      reverse: false,
    }
  ];

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const slideFromTop = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {/* Your content here */}
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <motion.h1
              className="mb-5 text-5xl font-bold"
              variants={slideFromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }} // Trigger animation only once
            >
              About Us
            </motion.h1>
            <motion.p
              className="mb-5 text-md"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Welcome to Smart Cricket, your go-to platform for AI-powered cricket analysis and prediction.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row ${section.reverse ? 'md:flex-row-reverse' : ''} items-center p-4`}
          variants={index % 2 === 0 ? slideFromLeft : slideFromRight} // Apply left/right sliding animation based on index
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% of the element is visible
        >
          <div className="md:w-1/2 p-4">
            <motion.h2
              className="text-4xl font-bold mb-4 text-black"
              variants={slideFromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {section.heading}
            </motion.h2>
            <motion.p
              className="mb-4 text-black"
              variants={slideFromTop}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {section.text}
            </motion.p>
          </div>
          <div className="md:w-1/2 p-4 flex justify-center">
            <motion.img
              src={section.imgSrc}
              alt={section.heading}
              className="w-full max-w-lg h-auto object-cover rounded transform transition-transform duration-500 hover:scale-105 hover:translate-y-1"
              variants={slideFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      ))}

      <OurTeam />
      <ScrollToTopButton />
      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default About;
