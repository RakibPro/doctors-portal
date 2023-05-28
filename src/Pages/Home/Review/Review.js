import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { name, img, location, userReview } = review;
    return (
        <div className='review-card card'>
            <div className='card-body'>
                <p className='text-black'>{userReview}</p>
                <div className='card-actions justify-start mt-9'>
                    <div className='avatar mr-6 ml-2'>
                        <div className='w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2'>
                            <img src={img} alt='person img' />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-xl text-accent font-semibold'>
                            {name}
                        </h5>
                        <p className='text-black'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;
