import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div className='service-card card bg-white w-full'>
            <figure className='px-10 pt-10'>
                <img src={img} alt='Shoes' className='rounded-xl' />
            </figure>
            <div className='card-body items-center text-center'>
                <h2 className='card-title text-accent'>{name}</h2>
                <p className='text-black'>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
