import React from 'react';
import './Banner.css';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className='banner-container hero'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
                <img src={chair} className='rounded-lg w-1/2 shadow-2xl' />
                <div>
                    <h1 className='text-5xl font-bold leading-snug	'>
                        Your New Smile Starts Here
                    </h1>
                    <p className='py-6'>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className='btn btn-primary text-white border-none bg-gradient-to-r from-secondary to-primary'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
