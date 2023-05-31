import React from 'react';
import chair from '../../../assets/images/chair.png';
import backgroundImg from '../../../assets/images/bg.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <section>
            <div
                className='hero lg:h-[800px] mb-12 lg:m-0'
                style={{
                    background: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '8px',
                }}
            >
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
                        <Link to='/appointment'>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
