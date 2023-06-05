import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const url = `http://localhost:5000/bookings?email=${user?.email}`;
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem(
                        'accessToken'
                    )}`,
                },
            });
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className='m-14'>
            <h2 className='text-3xl text-black mb-4'>My Appointment</h2>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings?.map((booking, i) => (
                            <tr
                                key={booking._id}
                                className='hover cursor-pointer'
                            >
                                <th>{i + 1}</th>
                                <td>{booking.patient}</td>
                                <td>{booking.treatment}</td>
                                <td>{booking.appointmentDate}</td>
                                <td>{booking.slot}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyAppointment;
