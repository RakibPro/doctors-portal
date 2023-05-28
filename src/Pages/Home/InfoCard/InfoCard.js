import React from 'react';

const InfoCard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className={`card md:card-side text-white p-6 mb-5 ${bgClass}`}>
            <figure>
                <img src={icon} alt='icon' />
            </figure>
            <div className='card-body'>
                <h2 className='card-title font-bold'>{name}</h2>
                <p className=' font-light'>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;
