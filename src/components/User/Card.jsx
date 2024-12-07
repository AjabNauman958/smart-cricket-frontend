import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import cardImage from '../images/card.png';

const Card = () => {
    return (
        <motion.div
            className="hero lg:h-[250px] sm:h-min-screen"
            whileInView={{ opacity: 1, x: 0 }} // Fade in and slide in from the left
            initial={{ opacity: 0, x: -100 }} // Initially hidden and offset to the left
            transition={{ duration: 0.6, ease: 'easeOut' }} // Smooth transition
            viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% is in view
        >
            <div className="hero-content flex-col lg:flex-row">
                <motion.img
                    src={cardImage}
                    className="max-w-sm"
                    initial={{ opacity: 0, y: 30 }} // Start with opacity 0 and moved down
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up to original position
                    viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the paragraph is in view
                    transition={{ duration: 0.6, delay: 0.2 }} // Duration and delay of animation
                />
                <motion.div initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and moved down
                    whileInView={{ opacity: 1, y: 0 }} // Fade in and move up to original position
                    viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the heading is in view
                    transition={{ duration: 0.6 }} // Duration of animation
                >
                    <h1 className="text-4xl font-bold">Explore the World of Cricket Like Never Before!</h1>
                    <p className="py-6">
                        Experience the thrill of cricket with unmatched insights! Get real-time stats, AI-powered predictions, and exclusive updates on your favorite teams and players. From rankings to in-depth match analysis, we've got everything a cricket enthusiast needs to stay ahead of the game.
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Card;
