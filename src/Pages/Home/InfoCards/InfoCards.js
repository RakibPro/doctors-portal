import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from '../InfoCard/InfoCard';

const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open at 8:00am to 7:00pm Everyday',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-secondary to-primary',
        },
        {
            id: 2,
            name: 'Visit Our Location',
            description: 'Brooklyn, NY 10036, United States',
            icon: marker,
            bgClass: 'bg-accent',
        },
        {
            id: 3,
            name: 'Contact Us Now',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-secondary to-primary',
        },
    ];

    return (
        <section>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {cardData.map((card) => (
                    <InfoCard key={card.id} card={card} />
                ))}
            </div>
        </section>
    );
};

export default InfoCards;
