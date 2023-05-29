import React from 'react';

const ServiceCard = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div
            className='service-card card bg-white w-full'
            style={{ boxShadow: '3px 4px 10px 2px rgba(0, 0, 0, 0.05)' }}
        >
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
