import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, price, slots } = appointmentOption;
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
                <p className='text-center text-sm text-black uppercase mb-2'>
                    Price: ${price}
                </p>
                <div className='card-actions justify-center'>
                    <label
                        disabled={slots.length === 0}
                        htmlFor='booking-modal'
                        className='btn text-white border-none bg-gradient-to-r from-secondary to-primary'
                        onClick={() => setTreatment(appointmentOption)}
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;
