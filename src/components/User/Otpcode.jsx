import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import forget from '../images/forget.png';
import '../css/signup.css'; // Ensure your CSS file is imported
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const Otpcode = () => {
    const [isSetupCompleted, setIsSetupCompleted] = useState(false);
    const [seconds, setSeconds] = useState(120);
    const [canResend, setCanResend] = useState(false);
    const [verificationCode, setVerificationCode] = useState(['', '', '', '']); // Array to hold 4-digit code
    const navigate = useNavigate();

    useEffect(() => {
        const countdown = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds <= 1) {
                    clearInterval(countdown);
                    setCanResend(true);
                    return 0;
                }
                return prevSeconds - 1;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const handleSubmit = () => {
        const code = verificationCode.join('');
        if (code.length === 4) {
            // Add your verification logic here
            setIsSetupCompleted(true);
            toast.success("Verification successful! Setup completed.");
        } else {
            toast.error("Please enter a 4-digit verification code.");
        }
    };

    const handleGoBack = () => {
        navigate('/newpassword'); // Adjust the path as needed to point to your login screen
    };

    const handleResendCode = () => {
        if (canResend) {
            setSeconds(120); // Reset the timer to 2 minutes
            setCanResend(false);
            // Add logic to resend the verification code
            toast.success("Verification code resent!");
        } else {
            toast.error("You can only resend the code after the timer runs out.");
        }
    };

    const handleChange = (index, value) => {
        const updatedCode = [...verificationCode];
        updatedCode[index] = value;
        setVerificationCode(updatedCode);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <main className="flex flex-col items-center justify-center w-full h-full px-4 md:px-20 text-center">
                <div className='bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl maindiv'>
                    {/* Left side */}
                    <div className='w-full md:w-2/5 bg-green-500 text-white rounded-tl-2xl rounded-bl-2xl flex items-center justify-center p-8'>
                        <div>
                            <h2 className='text-2xl md:text-3xl font-bold mb-2'>SmartCricket</h2>
                            <img src={forget} alt="Forget Image" className="w-40 md:w-56 h-40 md:h-56 mb-4" />
                        </div>
                    </div>
                    {/* Right side */}
                    <div className='w-full md:w-3/5 p-5'>
                        <div className='text-right font-bold text-xs md:text-sm lg:text-base xl:text-lg'>
                            <span className='text-green-500'> Smart</span>Cricket
                        </div>
                        {isSetupCompleted ? (
                            <div className="flex flex-col items-center justify-center my-4 h-96">
                                <h2 className='text-2xl md:text-3xl font-bold text-green-500 mb-2'>Setup Completed</h2>
                                <p className='text-sm md:text-base'>Your account is now protected with changing your password.</p>
                                <button
                                    className="mt-4 bg-green-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-green-600 transition-all duration-300"
                                    onClick={handleGoBack}
                                >
                                    Go Back to Login
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className='py-10'>
                                    <h2 className='text-2xl md:text-3xl font-bold text-green-500 mb-2'>Forget Your Password</h2>
                                    <div className='border-2 border-green-500 inline-block mb-2 w-32 md:w-52 lg:w-72 xl:w-96'></div>
                                </div>
                                <div className="flex flex-col items-center justify-center my-4">
                                    <p className='font-bold text-sm md:text-base lg:text-lg xl:text-xl'>Email Setup</p>
                                    <p className='text-sm md:text-base lg:text-base xl:text-base'>We have sent a verification code to player@gmail.com</p>
                                    <p className='font-bold text-sm md:text-base lg:text-lg xl:text-xl'>1. Go to your inbox</p>
                                    <p className='text-sm md:text-base lg:text-base xl:text-base'>Can't find a verification code? Make sure to check the spam folder.</p>
                                    <p className='font-bold text-sm md:text-base lg:text-lg xl:text-xl'>2. Finish setup</p>
                                    <p className='text-sm md:text-base lg:text-base xl:text-base'>Enter the verification code we sent to your email.</p>
                                    <div className="flex space-x-2 mt-4">
                                        {verificationCode.map((digit, index) => (
                                            <input
                                                key={index}
                                                type="text"
                                                className="border-2 border-gray-300 rounded-lg w-12 h-12 text-center text-xl md:text-2xl"
                                                maxLength="1"
                                                value={digit}
                                                onChange={(e) => handleChange(index, e.target.value)}
                                            />
                                        ))}
                                    </div>
                                    <button 
                                        className="mt-4 bg-green-500 text-white rounded-lg px-6 py-2 font-semibold hover:bg-green-600 transition-all duration-300"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                    <p className="mt-2 text-sm md:text-base">{`00:${seconds < 10 ? `0${seconds}` : seconds} sec`}</p>
                                    <p className="mt-2 text-sm md:text-base">Don't receive a code? <a href="#" className="text-green-500" onClick={handleResendCode}>Re-send</a></p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
}

export default Otpcode;
