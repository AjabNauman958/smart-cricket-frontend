import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md'; // Import of icons
import playerLoginpic from '../components/images/playerlogin.png'; // import of images


const Playerlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [error, setError] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        // Add validation logic
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        // Add authentication logic
        if (email === 'your@email.com' && password === 'yourpassword') {
            // Redirect to dashboard of player profile
            window.location.href = '/dashboard';
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100 bodycolor'>
            <main className="flex flex-col items-center justify-center w-full h-full px-20 text-center">
                <div className='bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl'>
                    <div className='w-full md:w-3/5 p-5'>
                        <div className='text-left font-bold'>
                            <span className='text-green-500'> Smart</span>Cricket
                        </div>
                        <div className='py-10'>
                            <h2 className='text-3xl font-bold text-green-500 mb-2'>Player Login </h2>
                            <div className='border-2 w-10 border-green-500 inline-block mb-2'></div>
                        </div>

                        <form onSubmit={handleSignIn}>
                            <div className='flex flex-col items-center'>
                                <div className='bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3'>
                                    <FaRegEnvelope className="text-gray-400 m-2" />
                                    <input required type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your Email Id' className='bg-gray-100 outline-none text-sm flex-1' />
                                </div>

                                <div className='bg-gray-100 w-full md:w-64 p-2 flex items-center mb-3'>
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <input type={showPassword ? 'text' : 'password'} name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your Password' className='bg-gray-100 outline-none text-sm flex-1' />
                                    {/* Eye icon to toggle password visibility */}
                                    {showPassword ? (
                                        <MdVisibilityOff className="text-gray-400 m-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                                    ) : (
                                        <MdVisibility className="text-gray-400 m-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)} />
                                    )}
                                </div>
                                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                                <div className='flex justify-between w-full md:w-64 mb-5'>
                                    <label className='flex items-center text-xs'>
                                        <input type='checkbox' name='remember' className='mr-1' /> Remember me
                                    </label>
                                    <a  href='#' className='text-xs'> Forgot Password?</a>
                                </div>
                                <button type="submit" className='border-2 border-green-500 text-green-500 rounded-lg px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white transition-all duration-300'> Sign In</button>                     
                            </div>
                        </form>
                    
                       
                    </div>
                    <div className='w-full md:w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-8 md:py-36 px-4 md:px-12 flex flex-col justify-center items-center'>
                        <h2 className='text-3xl font-bold mb-2'>SmartCricket</h2>
                        <div className='border-2 w-10 border-white inline-block mb-2'></div>
                        <img src={playerLoginpic} alt="Cricket Image" className="w-60 h-60 mb-4 self-center" />
                     
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Playerlogin