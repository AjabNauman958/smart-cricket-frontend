import React, { useState, useEffect } from 'react';
import '../css/faqs.css'; // Import your CSS file
import faq from '../images/faq.jpg'; // Replace with your actual image path
import Footer from './Footer';
import Navbar from './Navbar';

const FAQS = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const faqs = [
    {
      question: "Do you accept Paypal?",
      answer: "Yes, we do, along with AliPay, PayTM, and Payoneer."
    },
    {
      question: "What is your SLA Guarantee?",
      answer: "We ensure a 99.9% uptime SLA guarantee."
    },
    {
      question: "Are there more Tailwind templates?",
      answer: "Yes, we do, along with AliPay, PayTM, and Payoneer."
    },
    {
      question: "Is this template free for commercial use?",
      answer: "Yes, you can use it for commercial purposes."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-6 mt-14">
      <div className={`flex justify-center mb-6 transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <img src={faq} alt="FAQ Illustration" className="w-full max-w-md" />
      </div>
      <h2 className="text-3xl font-bold text-center mb-4 text-green-500">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md">
            <button
              className="w-full flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <span className={`transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-40' : 'max-h-0'}`}
            >
              <p className="mt-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default FAQS;
