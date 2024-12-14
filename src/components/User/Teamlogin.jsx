import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegEnvelope, FaGoogle } from 'react-icons/fa';
import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import managementloginpic from '../images/managementlogin.png';
import '../css/login.css'; // Ensure your CSS file is imported
import { toast, ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Teamlogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [animation, setAnimation] = useState(false);

    React.useEffect(() => {
        setAnimation(true);
    }, []);

    const handleSignIn = (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Please enter both email and password.'); // Show error toast
            return;
        }
        // Add authentication logic
        if (email === 'your@email.com' && password === 'yourpassword') {
            // Show success toast
            toast.success('Login successful!');
            // Redirect to dashboard of player profile
            setTimeout(() => {
                window.location.href = '/TeamDashboard';
            }, 2000); // Redirect after 2 seconds
        } else {
            toast.error('Invalid email or password.'); // Show error toast
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen py-2  ${animation ? 'fade-in active' : ''}`}>
            <main className="flex flex-col items-center justify-center w-full h-full px-4 md:px-20 text-center">
                <div className='bg-white rounded-2xl shadow-2xl flex w-full max-w-5xl maindiv'>
                    {/* Left Side */}
                    <div className='w-full md:w-3/5 p-5 leftdiv'>
                        <div className='text-left font-bold text-sm md:text-base lg:text-lg xl:text-xl'>
                        </div>
                        <div className='py-10'>
                            <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-green-500 mb-2'>Team Management Login</h2>
                            <div className='border-2  w-52 md:w-72 border-green-500 inline-block mb-2'></div>
                        </div>
                        <form onSubmit={handleSignIn}>
                            <div className='flex flex-col items-center'>
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-4 rounded-lg input-container'>
                                    <FaRegEnvelope className="text-gray-400 m-2 text-xs md:text-sm lg:text-md xl:text-md" />
                                    <input
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder='Enter your Email Id'
                                        className='bg-gray-100 outline-none text-xs md:text-sm lg:text-md xl:text-md flex-1 p-2 rounded-lg input-field'
                                    />
                                </div>
                                {/* Password input field with icon and toggle */}
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
                                {error && <p className="text-red-500 text-xs md:text-sm lg:text-base xl:text-lg mb-3">{error}</p>}
                                <div className='flex justify-between w-full md:w-80 mb-5'>
                                    <label className='flex items-center text-xs md:text-sm lg:text-base xl:text-base'>
                                        <input type='checkbox' name='remember' className='mr-1' /> Remember me
                                    </label>
                                    <Link to='/forget' className='text-xs md:text-sm lg:text-base xl:text-base'>Forgot Password?</Link>
                                </div>
                                <button
                                    type="submit"
                                    className='border-2 border-green-500 text-green-500 rounded-lg px-8 md:px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 text-xs md:text-sm lg:text-base xl:text-lg'
                                >
                                    Sign In
                                </button>
                                <div className="mt-4">
                                    <p className="text-xs md:text-sm lg:text-base xl:text-md">Don't have an account? <Link to="/TeamSignup" className="text-green-500">Sign Up</Link></p>
                                </div>
                                <div className="flex justify-center flex-col items-center">
                                    <button className="flex items-center border-2 border-green-500 rounded-lg px-6 py-2 mt-6 font-semibold hover:bg-green-500 hover:text-white text-xs md:text-sm lg:text-base xl:text-base">
                                        <FaGoogle className="text-orange-500 mr-2 text-xs md:text-sm lg:text-base xl:text-base" /> {/* Google icon */}
                                        Login with Google
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Right Side */}
                    <div className='w-full md:w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-8 md:py-16 px-4 md:px-12 flex flex-col justify-center items-center'>
                        <h2 className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold mb-2'>SmartCricket</h2>
                        <div className='border-2 w-10 md:w-12 border-white inline-block mb-2'></div>
                        <img src={managementloginpic} alt="Management Login" className="w-40 md:w-60 lg:w-72 xl:w-96 h-40 md:h-60 lg:h-72 xl:h-96 mb-4 self-center" />
                    </div>
                </div>
            </main>
            <ToastContainer /> {/* Add ToastContainer for toasts */}
        </div>
    );
}

export default Teamlogin;
