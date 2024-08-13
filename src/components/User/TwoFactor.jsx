import React from 'react';
import { useNavigate } from 'react-router-dom';
import forget from '../images/forget.png';
import { FaRegEnvelope } from 'react-icons/fa';
import '../css/signup.css'; // Ensure your CSS file is imported

const TwoFactor = () => {
    const navigate = useNavigate();

    const handleEmailMe = async () => {
        // Placeholder for API call to send the verification code to the email
        // Example:
        // await sendVerificationCode(email);
        
        // Assuming the API call is successful, navigate to the OTP code screen
        navigate('/otpcode');
    };

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2 '>
            <main className="flex flex-col items-center justify-center w-full h-full px-4 md:px-20 text-center">
                <div className='bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl maindiv'>
                    {/* Left side */}
                    <div className='w-full md:w-2/5 bg-green-500 text-white rounded-tl-2xl rounded-bl-2xl py-8 md:py-16 px-4 md:px-12 flex flex-col items-center justify-center'>
                        <h2 className='text-2xl md:text-3xl lg:text-3xl font-bold mb-2'>SmartCricket</h2>
                        <img src={forget} alt="Forget Image" className="w-40 md:w-56 lg:w-72 h-40 md:h-56 lg:h-72 mb-4" />
                    </div>
                    {/* Right side */}
                    <div className='w-full md:w-3/5 p-5'>
                        <div className='text-right font-bold text-xs md:text-sm lg:text-base xl:text-lg'>
                            <span className='text-green-500'> Smart</span>Cricket
                        </div>
                        <div className='py-10'>
                            <h2 className='text-2xl md:text-3xl lg:text-3xl font-bold text-green-500 mb-2'>Forget Password?</h2>
                            <div className='border-2 border-green-500 inline-block mb-2 w-40 md:w-52 lg:w-72 xl:w-96'></div>
                        </div>
                        <div className="flex flex-col items-center justify-center my-4">
                            <p className='text-sm md:text-base lg:text-base xl:text-base'>
                                SmartCricket requires you to protect your account with updating your password
                            </p>
                            <button 
                                className="mt-4 flex items-center align-center border-2 border-green-500 rounded-lg px-6 py-2 font-semibold hover:bg-green-500 hover:text-white transition-all duration-300 text-xs md:text-sm lg:text-base xl:text-base"
                                onClick={handleEmailMe}
                            >
                                <FaRegEnvelope className="text-orange-500 mr-2 text-xs md:text-sm lg:text-md xl:text-md" />
                                Email Me
                            </button>
                            <p className="mt-2 text-xs md:text-sm lg:text-base xl:text-base">Receive verification codes via email</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TwoFactor;
