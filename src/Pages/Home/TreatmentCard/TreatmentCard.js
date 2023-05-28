import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const TreatmentCard = () => {
    return (
        <div className='hero my-28'>
            <div className='hero-content gap-24 flex-col lg:flex-row justify-between lg:mx-40'>
                <img src={treatment} className='w-full lg:w-1/3 rounded-lg' />
                <div>
                    <h1 className='text-5xl font-bold text-accent'>
                        Exceptional Dental Care, on Your Terms
                    </h1>
                    <p className='py-6'>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsumis
                        that it has a more-or-less normal distribution of
                        letters,as opposed to using 'Content here, content
                        here', making it look like readable English. Many
                        desktop publishing packages and web page
                    </p>
                    <button className='btn btn-primary text-white border-none bg-gradient-to-r from-secondary to-primary'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TreatmentCard;
