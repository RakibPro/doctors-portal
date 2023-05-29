import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then((res) => res.json())
            .then((data) => setAppointmentOptions(data));
    }, []);
    return (
        <section className='mt-14'>
            <p className='text-xl text-secondary text-center'>
                Available Services on {format(selectedDate, 'PP')}
            </p>
            <div className='grid gap-9 grid-cols-1 md:grid-col-2 lg:grid-cols-3 my-16'>
                {appointmentOptions.map((option) => (
                    <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                    />
                ))}
            </div>
        </section>
    );
};

export default AvailableAppointment;
