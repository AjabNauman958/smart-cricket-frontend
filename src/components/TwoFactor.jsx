import React from 'react';
import { useNavigate } from 'react-router-dom';
import forget from '../components/images/forget.png';
import { FaRegEnvelope } from 'react-icons/fa';
import '../components/css/signup.css'; // Assuming your CSS file is correctly imported

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
        <div className={`flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100`}>
            <main className="flex flex-col items-center justify-center w-full h-full px-20 text-center">
                <div className='bg-white rounded-2xl shadow-2xl flex w-full max-w-4xl'>
                    {/* Left side */}
                    <div className='w-full md:w-2/5 bg-green-500 text-white rounded-tl-2xl rounded-bl-2xl py-8 md:py-36 px-4 md:px-12 flex flex-col items-center justify-center'>
                        <h2 className='text-3xl font-bold mb-2'>SmartCricket</h2>
                        <img src={forget} alt="forget Image" className="w-56 h-56 mb-4" />
                    </div>
                    {/* Right side */}
                    <div className='w-full md:w-3/5 p-5'>
                        <div className='text-right font-bold'>
                            <span className='text-green-500'> Smart</span>Cricket
                        </div>
                        <div className='py-10'>
                            <h2 className='text-3xl font-bold text-green-500 mb-2'>Two-Factor Authentication</h2>
                            <div className='border-2 border-green-500 inline-block mb-2 w-96'></div>
                        </div>
                        <div className="flex flex-col items-center justify-center my-4">
                            <p>SmartCricket requires you to protect your account with 2FA</p>
                            <button 
                                className="mt-4 flex items-center align-center border-2 border-green-500 rounded-lg px-6 py-2 font-semibold hover:bg-green-500 hover:text-white"
                                onClick={handleEmailMe}
                            >
                                <FaRegEnvelope className="text-orange-500 mr-2" />
                                Email Me
                            </button>
                            <p className="mt-2">Receive verification codes via email</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default TwoFactor;
