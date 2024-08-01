import React, { useState, useEffect } from 'react';
import '../../css/faqs.css'; // Import your CSS file

const FaqsDetail = () => {
    const [activeIndex, setActiveIndex] = useState(null);


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


    return (
        <>

            <div className="max-w-4xl mx-auto p-6 ">


                <div className="">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg p-4 shadow-md mb-8 hover:bg-yellow-500 duration-500">
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

        </>
    );
};

export default FaqsDetail;
