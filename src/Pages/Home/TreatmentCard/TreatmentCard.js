import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const TreatmentCard = () => {
    return (
        <section>
            <div className='hero my-28'>
                <div className='hero-content gap-24 flex-col lg:flex-row lg:mx-40'>
                    <img
                        src={treatment}
                        className='w-full lg:w-1/3 rounded-lg'
                    />
                    <div>
                        <h1 className='text-5xl font-bold text-accent'>
                            Exceptional Dental Care, on Your Terms
                        </h1>
                        <p className='py-6 text-black'>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsumis that it has a more-or-less normal
                            distribution of letters,as opposed to using 'Content
                            here, content here', making it look like readable
                            English. Many desktop publishing packages and web
                            page
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

export default TreatmentCard;
