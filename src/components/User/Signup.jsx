import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEnvelope, FaGoogle, FaUser } from 'react-icons/fa';
import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import cricketImage from '../images/signup.png';
import '../css/signup.css'; // Ensure your CSS file is imported
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Signup = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setAnimation(true);
    }, []);

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!userName || !email || !password || !confirmPassword) {
            toast.error('Please fill in all fields.');
            return;
        }
        if (password !== confirmPassword) {

            toast.error('Passwords do not match.');
            return;
        }

        toast.success('Signup successful!');

        setTimeout(() => {
            window.location.href = '/login';
        }, 2000);
    };

    const slideFromLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const slideFromRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen py-2  ${animation ? 'fade-in active' : ''}`}>
            <main className="flex flex-col items-center justify-center w-full h-full px-4 md:px-20 text-center">
                <div className='bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl maindiv'>
                    {/* Left side */}
                    <div className='w-full md:w-2/5 bg-green-500 text-white rounded-tl-2xl rounded-bl-2xl py-8 md:py-16 px-4 md:px-12 flex flex-col justify-center items-center leftdiv'>
                        <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-2'>SmartCricket</h2>
                        <div className='border-2 w-60 border-white inline-block mb-2'></div>
                        <motion.img src={cricketImage} alt="Cricket Image" className="w-40 md:w-60 lg:w-80 xl:w-96 h-40 md:h-60 lg:h-80 xl:h-96 mb-4" variants={slideFromLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        />
                    </div>
                    {/* Right side */}
                    <motion.div className='w-full md:w-3/5 p-5 rightdiv' variants={slideFromRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        <div className='py-10'>
                            <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-green-500 mb-2'>Create an Account</h2>
                            <div className='border-2 w-72 border-green-500 inline-block mb-2'></div>
                        </div>

                        <form onSubmit={handleSignUp}>
                            <div className='flex flex-col items-center'>
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-3 rounded-lg input-container'>
                                    <FaUser className="text-gray-400 m-2 text-sm md:text-base lg:text-md xl:text-md" />
                                    <input
                                        required
                                        type='text'
                                        name='userName'
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder='Enter your First Name'
                                        className='bg-gray-100 outline-none text-xs md:text-sm lg:text-md xl:text-md flex-1 rounded-lg input-field'
                                    />
                                </div>
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-3 rounded-lg input-container'>
                                    <FaRegEnvelope className="text-gray-400 m-2 text-sm md:text-base lg:text-md xl:text-md" />
                                    <input
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Enter your Email Address'
                                        className='bg-gray-100 outline-none text-xs md:text-sm lg:text-md xl:text-md flex-1 rounded-lg input-field'
                                    />
                                </div>
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-3 rounded-lg input-container'>
                                    <MdLockOutline className="text-gray-400 m-2 text-sm md:text-base lg:text-md xl:text-md" />
                                    <div className="relative flex-1">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder='Enter your Password'
                                            className='bg-gray-100 outline-none text-xs md:text-sm lg:text-md xl:text-md w-full rounded-lg input-field pr-10'
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 px-3 flex items-center"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <MdVisibilityOff className="text-xs md:text-sm lg:text-base xl:text-base" /> : <MdVisibility className="text-xs md:text-sm lg:text-base xl:text-base" />}
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-3 rounded-lg input-container'>
                                    <MdLockOutline className="text-gray-400 m-2 text-sm md:text-base lg:text-md xl:text-md" />
                                    <div className="relative flex-1">
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            name='confirmPassword'
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder='Confirm your Password'
                                            className='bg-gray-100 outline-none text-xs md:text-sm lg:text-md xl:text-md w-full rounded-lg input-field pr-10'
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 px-3 flex items-center"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <MdVisibilityOff className="text-xs md:text-sm lg:text-base xl:text-base" /> : <MdVisibility className="text-xs md:text-sm lg:text-base xl:text-base" />}
                                        </button>
                                    </div>
                                </div>
                                {error && <p className="text-red-500 text-xs md:text-sm lg:text-base xl:text-lg mb-3">{error}</p>}
                                <button
                                    type="submit"
                                    className='border-2 border-green-500 text-green-500 rounded-lg px-8 md:px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 text-xs md:text-sm lg:text-base xl:text-lg'
                                >
                                    Sign Up
                                </button>
                                <div className="mt-4">
                                    <p className="text-xs md:text-sm lg:text-base xl:text-md">Already have an account? <Link to="/login" className="text-green-500">Sign In</Link></p>
                                </div>
                            </div>
                        </form>
                        <div className="flex items-center justify-center my-4">
                            <span className="text-xs md:text-sm lg:text-base xl:text-lg text-black-900">-----Or-----</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <button className="flex items-center border-2 border-green-500 rounded-lg px-6 py-2 font-semibold hover:bg-green-500 hover:text-white text-xs md:text-sm lg:text-base xl:text-base">
                                <FaGoogle className="text-orange-500 mr-2 text-xs md:text-sm lg:text-base xl:text-base" />
                                Sign Up with Google
                            </button>
                            <div className="flex flex-col justify-center mt-2">
                                <Link to="/playersignup">
                                    <button className="border-2 border-green-500 text-green-500 rounded-lg px-6 py-2 font-semibold hover:bg-green-500 hover:text-white transition-all mb-2 duration-300 text-xs md:text-sm lg:text-base xl:text-base">
                                        Sign Up as Player
                                    </button>
                                </Link>
                                <Link to="/teamsignup">
                                    <button className="border-2 border-green-500 text-green-500 rounded-lg px-6 py-2 font-semibold ml-2 hover:bg-green-500 hover:text-white transition-all duration-300 text-xs md:text-sm lg:text-base xl:text-base">
                                        Sign Up as Team
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
}

export default Signup;
