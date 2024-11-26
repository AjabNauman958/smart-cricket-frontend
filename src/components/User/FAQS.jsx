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
      question: "What is a Powerplay in cricket?",
      answer: "A Powerplay is a set of overs in a limited-overs match where fielding restrictions are applied, allowing only a limited number of fielders outside the 30-yard circle."
    },
    {
      question: "How many players are there in a cricket team?",
      answer: "A cricket team consists of 11 players."
    },
    {
      question: "What is the role of a third umpire?",
      answer: "The third umpire uses technology to assist with decisions like run-outs, stumpings, and boundary calls that the on-field umpires may refer."
    },
    {
      question: "How long is a Test match in cricket?",
      answer: "A Test match is played over five days, with each day having multiple sessions of play."
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
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 mt-14">
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
      <Footer />
    </>
  );
};

export default FAQS;
