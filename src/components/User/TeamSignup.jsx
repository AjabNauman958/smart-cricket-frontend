import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEnvelope, FaGoogle, FaUser } from 'react-icons/fa';
import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import managementloginpic from '../images/managementlogin.png';
import '../css/signup.css';
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const TeamSignup = () => {
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
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
        if (!firstName || !email || !password || !confirmPassword) {
            setError('Please fill in all fields.');
            toast.error('Please fill in all fields.'); // Show error toast
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            toast.error('Passwords do not match.'); // Show error toast
            return;
        }
        toast.success(`Signup successful with first name: ${firstName}, email: ${email}`); // Show success toast
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 ${animation ? 'fade-in active' : ''}`}>
            <main className="flex flex-col items-center justify-center w-full h-full px-4 md:px-20 text-center">
                <div className='bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl maindiv'>
                    {/* Left side */}
                    <div className='w-full md:w-2/5 bg-green-500 text-white rounded-tl-2xl rounded-bl-2xl py-8 md:py-16 px-4 md:px-12 flex flex-col justify-center items-center'>
                        <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-2'>SmartCricket</h2>
                        <img src={managementloginpic} alt="Cricket Image" className="w-40 md:w-56 lg:w-72 xl:w-96 h-40 md:h-56 lg:h-72 xl:h-96 mb-4" />
                    </div>
                    {/* Right side */}
                    <div className='w-full md:w-3/5 p-5'>
                        <div className='text-right font-bold text-xs md:text-sm lg:text-base xl:text-lg'>
                            <span className='text-green-500'> Smart</span>Cricket
                        </div>
                        <div className='py-10'>
                            <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-green-500 mb-2'>Team SignUp</h2>
                            <div className='border-2 w-40 md:w-52 lg:w-72 xl:w-80 border-green-500 inline-block mb-2'></div>
                        </div>
                        <form onSubmit={handleSignUp}>
                            <div className='flex flex-col items-center'>
                                <div className='bg-gray-100 w-full md:w-72 p-2 flex items-center mb-4 rounded-lg input-container'>
                                    <FaUser className="text-gray-400 m-2 text-xs md:text-sm lg:text-md xl:text-md" />
                                    <input
                                        required
                                        type='text'
                                        name='firstName'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder='Enter your First Name'
                                        className='bg-gray-100 outline-none text-xs md:text-sm lg:text-md xl:text-md flex-1 p-2 rounded-lg input-field'
                                    />
                                </div>
                                <div className='bg-gray-100 w-full md:w-72 p-2 flex items-center mb-4 rounded-lg input-container'>
                                    <FaRegEnvelope className="text-gray-400 m-2 text-xs md:text-sm lg:text-md xl:text-md" />
                                    <input
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Enter your Email Address'
                                        className='bg-gray-100 outline-none text-xs md:text-sm lg:text-md xl:text-md flex-1 p-2 rounded-lg input-field'
                                    />
                                </div>
                                <div className='bg-gray-100 w-full md:w-72 p-2 flex items-center mb-4 rounded-lg input-container'>
                                    <FaRegEnvelope className="text-gray-400 m-2 text-xs md:text-sm lg:text-md xl:text-md" />
                                    <input
                                        required
                                        type='text'
                                        name='country'
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        placeholder='Enter your Country Name'
                                        className='bg-gray-100 outline-none text-xs md:text-sm lg:text-md xl:text-md flex-1 p-2 rounded-lg input-field'
                                    />
                                </div>
                                <div className='bg-gray-100 w-full md:w-72 p-2 flex items-center mb-4 rounded-lg input-container'>
                                    <MdLockOutline className="text-gray-400 m-2 text-xs md:text-sm lg:text-md xl:text-md" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Enter your Password'
                                        className='bg-gray-100 outline-none text-xs md:text-sm lg:text-md xl:text-md flex-1 p-2 rounded-lg input-field'
                                    />
                                    {showPassword ? (
                                        <MdVisibilityOff className="text-gray-400 m-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                                    ) : (
                                        <MdVisibility className="text-gray-400 m-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                                    )}
                                </div>
                                <div className='bg-gray-100 w-full md:w-72 p-2 flex items-center mb-4 rounded-lg input-container'>
                                    <MdLockOutline className="text-gray-400 m-2 text-xs md:text-sm lg:text-md xl:text-md" />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name='confirmPassword'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder='Confirm your Password'
                                        className='bg-gray-100 outline-none text-xs md:text-sm lg:text-md xl:text-md flex-1 p-2 rounded-lg input-field'
                                    />
                                    {showConfirmPassword ? (
                                        <MdVisibilityOff className="text-gray-400 m-2 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                                    ) : (
                                        <MdVisibility className="text-gray-400 m-2 cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                                    )}
                                </div>
                                {error && <p className="text-red-500 text-xs md:text-sm lg:text-base xl:text-base mb-4">{error}</p>}
                                <button
                                    type="submit"
                                    className='border-2 border-green-500 text-green-500 rounded-lg px-8 md:px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 text-xs md:text-sm lg:text-base xl:text-base'
                                >
                                    Sign Up
                                </button>
                                <div className="mt-4">
                                    <p className="text-xs md:text-sm lg:text-base xl:text-base">Already have an account? <Link to="/Teamlogin" className="text-green-500">Sign In</Link></p>
                                </div>
                                <div className="flex flex-col items-center justify-center my-4">
                                    <span className="text-xs md:text-sm lg:text-base xl:text-base">-----Or-----</span>
                                    <div className="mt-4">
                                        <button className="flex items-center border-2 border-green-500 rounded-lg px-6 py-2 font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 text-xs md:text-sm lg:text-base xl:text-base">
                                            <FaGoogle className="text-orange-500 mr-2 text-xs md:text-sm lg:text-base xl:text-base" />
                                            Sign Up with Google
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <ToastContainer /> {/* Add ToastContainer for toasts */}
        </div>
    );
}

export default TeamSignup;
