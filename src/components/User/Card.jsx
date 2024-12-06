import React from 'react';
import cardImage from '../images/card.png'

const Card = () => {
    return (
        <>
            <div className="hero  lg:h-[400px] sm:h-min-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={cardImage}
                        className="max-w-sm" />
                    <div>
                        <h1 className="text-4xl font-bold">Explore the World of Cricket Like Never Before!</h1>
                        <p className="py-6">
                            Experience the thrill of cricket with unmatched insights! Get real-time stats, AI-powered predictions, and exclusive updates on your favorite teams and players. From rankings to in-depth match analysis, we've got everything a cricket enthusiast needs to stay ahead of the game
                        </p>
                        <button className="btn text-white bg-green-500 hover:bg-green-400">Get Started</button>
                    </div>
                </div>
            </div>

        </>
    );
};

// card
export default Card;
