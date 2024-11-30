import React from 'react';
import { Link } from 'react-router-dom'
import { FaGithub, FaInstagram, FaTwitter, FaFigma } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative mt-14">

      <div className="relative z-10 text-center p-6 md:flex md:justify-around md:text-left text-white " style={{ backgroundColor: '#00A09A' }}>
        {/* First Div: Logo and Social Icons */}
        <div className="mb-6 md:mb-0">
          <span className="mx-auto md:mx-0 text-yellow-300 text-3xl">SmartCricket</span>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <a href="#" className="text-white hover:text-black transition-colors duration-300"><FaGithub size={24} /></a>
            <a href="#" className="text-white hover:text-pink-600 transition-colors duration-300"><FaInstagram size={24} /></a>
            <a href="#" className="text-white hover:text-blue-600 transition-colors duration-300"><FaTwitter size={24} /></a>
            <a href="#" className="text-white hover:text-pink-200 transition-colors duration-300"><FaFigma size={24} /></a>
          </div>
          <p className="mt-4">&copy; 2024 <span className='text-yellow-300'>SmartCricket</span> All rights reserved.</p>
        </div>

        {/* Second Div: Navigation Links */}
        <div className="mb-6 md:mb-0">
          <ul>

            <li className="my-2"><Link to='/' className="hover:underline transition duration-300">Home</Link></li>
            <li className="my-2"><Link to='/about' className="hover:underline transition duration-300">About Us</Link></li>
            {/* <li className="my-2"><Link to='/tournament' className="hover:underline transition duration-300">Tournament</Link></li> */}
            <li className="my-2"><Link to='/matches' className="hover:underline transition duration-300">Matches</Link></li>
            <li className="my-2"><Link to='/ranking' className="hover:underline transition duration-300">Ranking</Link></li>
            <li className="my-2"><Link to='/comparison' className="hover:underline transition duration-300">Comparison</Link></li>
          </ul>
        </div>

        {/* Third Div: Contact Us and Policies */}
        <div className="mb-6 md:mb-0">
          <Link to='/contact'>  <a href="#" className="bg-yellow-300 text-black py-2 px-4 rounded hover:bg-yellow-400 transition duration-300">Contact Us</a></Link>
          <ul className="mt-4">
            <li className="my-2"><a href="#" className="hover:underline transition duration-300">Privacy Policy</a></li>
            <li className="my-2"><a href="#" className="hover:underline transition duration-300">Terms of Use</a></li>
            <li className="my-2">
              <Link to='/faqs'>
                <a href="#" className="hover:underline transition duration-300">FAQs</a></Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
