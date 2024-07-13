import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component
import backgroundImage from '../components/images/about.jpg'; // Adjust the path as necessary
import whoweare from '../components/images/whoweare.png'; // Adjust the path as necessary
import whatwedo from '../components/images/whatwedo.png'; // Adjust the path as necessary
import vision from '../components/images/vision.jpg'; // Adjust the path as necessary
import '../components/css/home.css'; // Import your CSS file

const About = () => {
  const sections = [
    {
      heading: "Who We Are",
      text: "At Smart Cricket, we are a passionate team of cricket enthusiasts, data scientists, and technology experts dedicated to bringing the latest advancements in AI and machine learning to the cricketing world. Our goal is to offer a seamless, user-friendly experience for cricket lovers worldwide.",
      buttonText: "Read More",
      imgSrc: whoweare, // Use imported image path
      reverse: false
    },
    {
      heading: "Our Mission",
      text: "Our mission is to revolutionize the way cricket is experienced and analyzed. We strive to provide cutting-edge insights and predictions that enhance the understanding and enjoyment of the game for fans, players, and analysts alike.",
      buttonText: "Learn More",
      imgSrc: whatwedo, // Use imported image path
      reverse: true
    },
    {
      heading: "Our Vision",
      text: "We envision a future where AI-driven analytics are an integral part of cricket strategy and fan engagement. By leveraging the power of data, we aim to uncover hidden patterns and trends that can transform the sport.",
      buttonText: "Discover More",
      imgSrc: vision, // Use imported image path
      reverse: false
    }
  ];

  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})`, minHeight: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
        <div className="dark-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="content" style={{ width: '50%', textAlign: 'center', color: '#fff' }}>
            <h1 className="hero-heading" style={{ fontWeight: 'bold' }}>About Us</h1>
            <p className="hero-text">
              Welcome to Smart Cricket, your go-to platform for AI-powered cricket analysis and prediction.
            </p>
          </div>
        </div>
      </div>

      {sections.map((section, index) => (
        <div key={index} className={`flex flex-col md:flex-row ${section.reverse ? 'md:flex-row-reverse' : ''} items-center my-8 p-4`}>
          <div className="md:w-1/2 p-4">
            <h2 className="text-4xl font-bold mb-4">{section.heading}</h2>
            <p className="mb-4">{section.text}</p>
            <button className="bg-yellow-300 text-white py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">{section.buttonText}</button>
          </div>
          <div className="md:w-1/2 p-4 flex justify-center">
            <img 
              src={section.imgSrc} 
              alt={section.heading} 
              className="w-full max-w-lg h-auto object-cover rounded transform transition-transform duration-500 hover:scale-105 hover:translate-y-1" 

          
            />
          </div>
        </div>
      ))}

      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default About;
