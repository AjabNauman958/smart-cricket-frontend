import React from 'react';
import { FaEnvelope, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import backgroundImage from '../components/images/babar.png'; // Replace with your actual image path
import '../components/css/contact.css'; // Import your CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left-side">
        {/* Animated or transitional image */}
        <img src={backgroundImage} alt="Background" className="animated-image" />
      </div>
      <div className="right-side">
        <div className="contact-form">
          <h2 className='text-4xl text-green-500'>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="info">
            <FaEnvelope className="icon" />
            <p>Email: contact@example.com</p>
          </div>
        </div>
        <div className="social-icons">
          <h3>Connect with Us</h3>
          <div className="icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram className="icon" /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="icon" /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook className="icon" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
