import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption;
    return (
        <div
            className='card'
            style={{ boxShadow: '3px 4px 10px 2px rgba(0, 0, 0, 0.05)' }}
        >
            <div className='card-body'>
                <h2 className='card-title justify-center text-secondary'>
                    {name}
                </h2>
                <p className='text-center text-sm text-black uppercase my-1'>
                    {slots.length > 0 ? slots[0] : 'Try Another Day'}
                </p>
                <p className='text-center text-sm text-black uppercase mb-2'>
                    {slots.length}{' '}
                    {slots.length > 1 ? 'Spaces Available' : 'Space Available'}
                </p>
                <div className='card-actions justify-center'>
                    <PrimaryButton>Book Appointment</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
