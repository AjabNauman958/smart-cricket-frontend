import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdLockOutline, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import '../css/signup.css'; // Ensure your CSS file is imported
import forget from '../images/forget.png';

const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const navigate = useNavigate();

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
        } else {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords do not match.');
            return;
        }
        // Perform submit action, e.g., update password in database
        setSuccessMessage('Password updated successfully!');
        toast.success('Password updated successfully!');
        setTimeout(() => {
            navigate('/login'); // Adjust the path as needed to point to your login screen
        }, 2000); // Redirect after 2 seconds
    };

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen py-2 `}>
            <main className="flex flex-col items-center justify-center w-full h-full px-4 md:px-20 text-center">
                <div className='bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl maindiv'>
                    {/* Left side */}
                    <div className='w-full md:w-2/5 bg-green-500 text-white rounded-tl-2xl rounded-bl-2xl py-8 md:py-36 px-4 md:px-12 flex flex-col items-center justify-center'>
                        <h2 className='text-2xl md:text-3xl font-bold mb-2'>SmartCricket</h2>
                        <img src={forget} alt="Forget Image" className="w-40 md:w-56 h-40 md:h-56 mb-4" />
                    </div>
                    {/* Right side */}
                    <div className='w-full md:w-3/5 p-5'>
                        <div className='text-right font-bold text-xs md:text-sm lg:text-base xl:text-lg'>
                            <span className='text-green-500'> Smart</span>Cricket
                        </div>
                        <div className='py-10'>
                            <h2 className='text-2xl md:text-3xl font-bold text-green-500 mb-2'>New Password</h2>
                            <div className='border-2 border-green-500 inline-block mb-2 w-32 md:w-52 lg:w-72 xl:w-96'></div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='flex flex-col items-center'>
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-4 rounded-lg input-container'>
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        required
                                        value={password}
                                        onChange={handlePasswordChange}
                                        placeholder='Enter your Password'
                                        className='bg-gray-100 outline-none text-sm flex-1 rounded-lg input-field'
                                    />
                                    <div className="cursor-pointer">
                                        {showPassword ? (
                                            <MdVisibilityOff className="text-gray-400 m-2" onClick={() => setShowPassword(!showPassword)} />
                                        ) : (
                                            <MdVisibility className="text-gray-400 m-2" onClick={() => setShowPassword(!showPassword)} />
                                        )}
                                    </div>
                                </div>
                                <div className='bg-gray-100 w-full md:w-80 p-2 flex items-center mb-4 rounded-lg input-container'>
                                    <MdLockOutline className="text-gray-400 m-2" />
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        required
                                        name='confirmPassword'
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        placeholder='Confirm your Password'
                                        className='bg-gray-100 outline-none text-sm flex-1 rounded-lg input-field'
                                    />
                                    <div className="cursor-pointer">
                                        {showConfirmPassword ? (
                                            <MdVisibilityOff className="text-gray-400 m-2" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                                        ) : (
                                            <MdVisibility className="text-gray-400 m-2" onClick={() => setShowConfirmPassword(!showConfirmPassword)} />
                                        )}
                                    </div>
                                </div>
                                {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                                {successMessage && <p className="text-green-500 text-sm mb-3">{successMessage}</p>}
                                <button type="submit" className='border-2 border-green-500 text-green-500 rounded-lg px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white transition-all duration-300'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
}

export default NewPassword;
