import React, { useState, useEffect } from 'react';
import '../../css/faqs.css'; // Import your CSS file

const FaqsDetail = () => {
    const [activeIndex, setActiveIndex] = useState(null);


    const faqs = [
        {
            question: "How is the Player of the Match decided?",
            answer: "The Player of the Match is chosen based on outstanding performance, such as scoring the most runs, taking crucial wickets, or making significant contributions to the team's success."
        },
        {
            question: "What happens in case of a tied match?",
            answer: "In case of a tie, a Super Over is played to determine the winner. If the Super Over is also tied, the match may end as a draw or based on tournament-specific rules."
        },
        {
            question: "How are ICC team rankings calculated?",
            answer: "Team rankings are calculated based on the performance of teams in international matches over a fixed period, with points awarded for wins and draws."
        },
        {
            question: "What is the Duckworth-Lewis-Stern (DLS) method?",
            answer: "The DLS method is used in rain-affected matches to adjust targets based on the number of overs and wickets remaining for the chasing team."
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
