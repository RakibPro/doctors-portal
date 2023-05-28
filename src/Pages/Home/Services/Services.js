import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const serviceData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos natus.',
            img: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos natus.',
            img: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eos natus.',
            img: whitening,
        },
    ];
    return (
        <section className='my-20'>
            <div className='text-center mb-20'>
                <h3 className='text-secondary text-xl font-bold uppercase '>
                    Our Services
                </h3>
                <h1 className='text-4xl text-accent'>Services We Provide</h1>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10'>
                {serviceData.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </section>
    );
};

export default Services;
