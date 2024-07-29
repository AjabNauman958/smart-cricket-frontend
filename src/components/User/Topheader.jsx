import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaUser } from 'react-icons/fa';
import '../css/navbar.css';
import profile from '../images/babar.png'; // Replace with your actual image path

const Topheader = ({ scrollToSection }) => {
    const Links = [
        { name: 'Home', link: '/' },
        { name: 'About Us', link: '/about' },
        { name: 'Tournament', link: '/tournament' },
        { name: 'Matches', link: '/matches' },
        { name: 'Ranking', link: '/ranking' },
        { name: 'Comparison', link: '/comparison' },
    ];

    const [isRankingHovered, setIsRankingHovered] = useState(false);
    const toggleRankingHover = () => setIsRankingHovered(!isRankingHovered);

    const [isOpen, setIsOpen] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(true); // Set to true for demonstration purposes
    const [isProfileHovered, setIsProfileHovered] = useState(false);

    const user = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        profileImage: profile // Replace with actual image URL
    };

    const toggleProfileHover = () => setIsProfileHovered(!isProfileHovered);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:px-10 py-4 px-7 md:flex justify-between items-center' style={{ backgroundColor: '#00A09A' }}>
                {/* logo here */}
                <div className='flex text-2xl cursor-pointer items-center gap-2'>
                    <span className='font-bold text-yellow-300'>SmartCricket</span>
                </div>

                {/* menu icons */}
                <div onClick={() => setIsOpen(!isOpen)} className='w-7 h-7 cursor-pointer absolute right-8 top-6 md:hidden'>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* nav links here */}
                <ul className={`md:flex pl-9 md:pl-0 md:items-center justify-center md:static md:pb-0 pb-12 absolute md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 text-white ease-in ${isOpen ? 'top-12' : 'top-[-490px]'}`} style={{ backgroundColor: '#00A09A' }}>
                    {Links.map((link, index) => (
                        <li className='font-semibold my-7 md:my-0 md:ml-8 relative' key={index}>
                            {link.name === 'Ranking' ? (
                                <div className='relative flex items-center' onMouseEnter={toggleRankingHover} onMouseLeave={toggleRankingHover}>
                                    <Link to={link.link} className='flex items-center'>
                                        {link.name}
                                        <FaChevronDown className='ml-1 mt-1' />
                                    </Link>
                                    {/* Dropdown for 'Ranking' */}
                                    {isRankingHovered && (
                                        <ul className='absolute top-full left-0 mt-1 bg-white text-gray-800 shadow-md rounded-md md:block'>
                                            <li>
                                                <Link to='/ranking' className='block py-2 px-4 hover:bg-gray-200' onClick={() => scrollToSection('mensSection')}>Men's Ranking</Link>
                                            </li>
                                            <li>
                                                <Link to='/ranking' className='block py-2 px-4 hover:bg-gray-200' onClick={() => scrollToSection('womensSection')}>Women's Ranking</Link>
                                            </li>
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <Link to={link.link}>{link.name}</Link>
                            )}
                        </li>
                    ))}
                    {isSignedIn ? (
                        <li className='font-semibold my-7 md:my-0 md:ml-8 relative'>
                            <div className='relative flex items-center' onMouseEnter={toggleProfileHover} onMouseLeave={toggleProfileHover}>
                                <img src={user.profileImage} alt='Profile' className='w-8 h-8 rounded-full cursor-pointer' style={{border:'1px solid yellow'}}/>
                                <FaChevronDown className='ml-1 mt-1 cursor-pointer' />
                                {isProfileHovered && (
                                    <div className='absolute top-full right-0 mt-1 bg-white text-gray-800 shadow-md rounded-md w-48'>
                                        <div className='p-4'>
                                            <img src={user.profileImage} alt='Profile' className='w-12 h-12 rounded-full mx-auto' />
                                            <p className='text-center font-bold mt-2'>{user.name}</p>
                                            <p className='text-center text-sm text-gray-600'>{user.email}</p>
                                        </div>
                                        <ul className='border-t border-gray-200'>
                                            <li>
                                                <Link to='/UserProfile' className='block py-2 px-4 hover:bg-gray-200'>My Profile</Link>
                                            </li>
                                            <li>
                                                <Link to='/signup' className='block py-2 px-4 hover:bg-gray-200'>Logout</Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </li>
                    ) : (
                        <li className='font-semibold my-7 md:my-0 md:ml-8'>
                            <Link to='/signup' className='text-white bg-yellow-400 hover:bg-yellow-300 py-3 px-3 rounded-lg'>Sign Up</Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Topheader;
