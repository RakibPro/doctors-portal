import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from '../Review/Review';

const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: 'Winson Herry',
            img: people1,
            location: 'California',
            userReview:
                'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here.',
        },
        {
            id: 2,
            name: 'Sophia',
            img: people2,
            location: 'New York',
            userReview:
                'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here.',
        },
        {
            id: 3,
            name: 'Riley',
            img: people3,
            location: 'Georgia',
            userReview:
                'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here.',
        },
    ];
    return (
        <section className='my-16'>
            <div className='flex justify-between mx-6'>
                <div>
                    <h3 className='text-xl text-secondary font-bold pb-2.5 '>
                        Testimonial
                    </h3>
                    <h2 className='text-4xl text-accent'>
                        What Our Patients Says
                    </h2>
                </div>
                <div>
                    <img
                        src={quote}
                        alt='quote icon'
                        className='w-24 lg:w-48'
                    />
                </div>
            </div>
            <div className='grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-20'>
                {reviews.map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </div>
        </section>
    );
};

export default Testimonial;
