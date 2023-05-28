import React from 'react';
import './Banner.css';
import chair from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <section>
            <div className='banner-container hero lg:h-[800px] mb-12 lg:m-0'>
                <div className='hero-content flex-col lg:flex-row-reverse'>
                    <img src={chair} className='rounded-lg lg:w-1/2' />
                    <div>
                        <h1 className='text-5xl font-bold leading-snug text-accent'>
                            Your New Smile Starts Here
                        </h1>
                        <p className='py-6'>
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
