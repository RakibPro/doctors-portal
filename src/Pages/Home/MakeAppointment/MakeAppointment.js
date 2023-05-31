import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import doctor from '../../../assets/images/doctor.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section
            className=' mt-48 rounded-lg'
            style={{
                background: `url(${appointment})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className='hero my-28'>
                <div className='hero-content flex-col lg:flex-row lg:h-[400px] p-10'>
                    <img
                        src={doctor}
                        className=' -mt-40  hidden md:block w-[560px] rounded-lg'
                    />
                    <div>
                        <h3 className=' py-5 text-xl bold text-secondary'>
                            Appointment
                        </h3>
                        <h1 className='text-4xl text-white font-bold'>
                            Make an appointment Today
                        </h1>
                        <p className='py-6 text-white'>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsumis that it has a more-or-less normal
                            distribution of letters,as opposed to using 'Content
                            here, content here', making it look like readable
                            English.
                        </p>
                        <Link to='/appointment'>
                            <PrimaryButton>Get Appointment</PrimaryButton>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
