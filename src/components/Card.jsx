import React from 'react';
import '../components/css/card.css';

const Card = ({ image, title, description }) => {
    return (
        <>
       
        <div className="card-component">
           
            <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
                <div className="card-content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Card;
