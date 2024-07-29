import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEnvelope, FaGoogle, FaUser } from 'react-icons/fa';
import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import cricketImage from '../images/signup.png';
import '../css/signup.css'; 

const Signup = () => {
    const [userName, setuserName] = useState('');
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
            setError('Please fill in all fields.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        alert(`Signup successful with first name: ${userName}, email: ${email}`);
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 ${animation ? 'fade-in active' : ''}` }  >
            <main className="flex flex-col items-center justify-center w-full h-full px-20 text-center" >
                <div className='maindiv bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl '>
                    {/* Left side */}
                    <div className='w-full md:w-2/5 bg-green-500 text-white rounded-tl-2xl rounded-bl-2xl py-8 md:py-36 px-4 md:px-12 flex flex-col items-center justify-center leftdivv'>
                        <h2 className='text-3xl font-bold mb-2'>SmartCricket</h2>
                        <img src={cricketImage} alt="Cricket Image" className="w-56 h-56 mb-4" />
                    </div>
                    {/* Right side */}
                    <div className='w-full md:w-3/5 p-5 rightdivv'>
                        <div className='text-right font-bold'>
                            <span className='text-green-500'> Smart</span>Cricket
                        </div>
                        <div className='py-10'>
                            <h2 className='text-3xl font-bold text-green-500 mb-2'>Create an Account</h2>
                            <div className='border-2 w-72 border-green-500 inline-block mb-2'></div>
                        </div>
                        <form onSubmit={handleSignUp}>
                            <div className='flex flex-col items-center'>
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-3 rounded-lg input-container'>
                                    <FaUser className="text-gray-400 m-2" />
                                    <input
                                        required
                                        type='text'
                                        name='userName'
                                        value={userName}
                                        onChange={(e) => setuserName(e.target.value)}
                                        placeholder='Enter your First Name'
                                        className='bg-gray-100 outline-none text-sm flex-1 p-2 rounded-lg input-field'
                                    />
                                </div>
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-3 rounded-lg input-container'>
                                    <FaRegEnvelope className="text-gray-400 m-2" />
                                    <input
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Enter your Email Address'
                                        className='bg-gray-100 outline-none text-sm flex-1 rounded-lg input-field'
                                    />
                                </div>
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-3 rounded-lg input-container'>
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <div className="relative flex-1">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name='password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder='Enter your Password'
                                            className='bg-gray-100 outline-none text-sm w-full rounded-lg input-field pr-10'
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 px-3 flex items-center"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                        </button>
                                    </div>
                                </div>
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-3 rounded-lg input-container'>
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <div className="relative flex-1">
                                        <input
                                            type={showConfirmPassword ? 'text' : 'password'}
                                            name='confirmPassword'
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder='Confirm your Password'
                                            className='bg-gray-100 outline-none text-sm w-full rounded-lg input-field pr-10'
                                        />
                                        <button
                                            type="button"
                                            className="absolute inset-y-0 right-0 px-3 flex items-center"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                        </button>
                                    </div>
                                </div>
                                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                                <button
                                    type="submit"
                                    className='border-2 border-green-500 text-green-500 rounded-lg px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white transition-all duration-300'
                                >
                                    Sign Up
                                </button>
                                {/* "Already have an account?" text */}
                                <div className="mt-4">
                                    <p className="text-sm">Already have an account? <Link to="/login" className="text-green-500">Sign In</Link></p>
                                </div>
                            </div>
                        </form>
                        <div className="flex flex-col items-center justify-center my-4">
                            <span className="text-black-900">-----Or-----</span>
                            <div className="mt-4">
                                <button className="flex items-center align-center border-2 border-green-500 rounded-lg px-6 py-2 font-semibold hover:bg-green-500 hover:text-white">
                                    <FaGoogle className="text-orange-500 mr-2" /> {/* Google icon */}
                                    Login with Google
                                </button>
                            </div>
                            <div className='flex flex-col md:flex-row mt-4'>
                            <Link to='/playersignup'> <button type="submit" className='border-2 border-green-500 text-green-500 rounded-lg px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 mb-2 md:mb-0 md:mr-2'>Sign Up as Player</button></Link>
                            <Link to='/teamsignup'>  <button type="submit" className='border-2 border-green-500 text-green-500 rounded-lg px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white transition-all duration-300'>Sign Up as Team</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Signup;
