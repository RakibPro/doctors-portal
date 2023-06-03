import React, { useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const {
        data: appointmentOptions = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () =>
            fetch(`http://localhost:5000/appointmentOptions?date=${date}`).then(
                (res) => res.json()
            ),
    });

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className='mt-14'>
            <p className='text-xl text-secondary text-center'>
                Available Services on {format(selectedDate, 'PP')}
            </p>
            <div className='grid gap-9 grid-cols-1 md:grid-col-2 lg:grid-cols-3 my-16'>
                {appointmentOptions?.map((option) => (
                    <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}
                    />
                ))}
            </div>
            {treatment && (
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                />
            )}
        </section>
    );
};

export default AvailableAppointment;
