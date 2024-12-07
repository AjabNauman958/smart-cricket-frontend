import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

import { FaEnvelope, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import backgroundImage from '../images/contact.jpg'; // Replace with your actual image path
import '../css/contact.css'; // Import your CSS file
import Navbar from './Navbar'; // Import the Navbar component
import Footer from './Footer'; // Import the Footer component
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container mt-10">
        <div className="left-side">
          {/* Animated or transitional image */}
          <img src={backgroundImage} alt="Background" className="animated-image" />
        </div>
        <motion.div className="right-side" initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and moved down
          whileInView={{ opacity: 1, y: 0 }} // Fade in and move up to original position
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the heading is in view
          transition={{ duration: 0.6 }} // Duration of animation
        >
          <div className="contact-form">
            <h2 className='text-5xl text-green-500 font-bold '>Contact Us</h2>
            <form >
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" className='fullName' placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className='email' placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" className='message' placeholder="Enter your message" required></textarea>
              </div>
              <button type="submit btnSubmit" className='p-3 bg-green-300 hover:bg-green-400 rounded-md'>Submit</button>
            </form>
          </div>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info">
              <FaEnvelope className="icon" />
              <p className='text-green-500'>smartcricket@gmail.com</p>
            </div>
          </div>
          <div className="social-icons">
            <h3>Connect with Us</h3>
            <div className="icons">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon text-blue-400 hover:text-blue-600" /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon text-pink-400 hover:text-pink-600" /></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon text-blue-400 hover:text-blue-600" /></a>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
