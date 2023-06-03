import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <section className='mx-6'>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <AvailableAppointment selectedDate={selectedDate} />
        </section>
    );
};

export default Appointment;
