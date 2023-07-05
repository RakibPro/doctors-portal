import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import Loading from '../../Shared/Loading/Loading';
import { Link } from 'react-router-dom';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const {
        data: bookings = [],
        isLoading,
        refetch,
    } = useQuery({
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

    const handleCancel = (id, name) => {
        Swal.fire({
            title: 'Are You Sure, You Want To Cancel Your Appointment ?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: ' #3085d6',
            confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `http://localhost:5000/bookings/${id}`;
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        authorization: `bearer ${localStorage.getItem(
                            'accessToken'
                        )}`,
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Canceled Successfully',
                                `${name} appointment has been canceled.`,
                                'success'
                            );
                            refetch();
                        }
                    });
            }
        });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <section className='m-14'>
            <h2 className='text-2xl text-black mb-6 font-bold'>
                My Appointment
            </h2>
            <div className='overflow-x-auto rounded-lg'>
                <table className='table w-full '>
                    <thead className='bg-[#E6E6E6] text-black uppercase'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Price</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {bookings &&
                            bookings?.map((booking, i) => (
                                <tr key={booking._id} className='hover'>
                                    <th>{i + 1}</th>
                                    <td>{booking.patient}</td>
                                    <td>{booking.treatment}</td>
                                    <td>{booking.appointmentDate}</td>
                                    <td>{booking.slot}</td>
                                    <td>${booking.price}</td>
                                    <td>
                                        {booking.price && !booking.paid && (
                                            <Link
                                                to={`/dashboard/payment/${booking._id}`}
                                            >
                                                <button className='btn btn-sm btn-secondary text-white'>
                                                    Pay
                                                </button>
                                            </Link>
                                        )}
                                        {booking.price && booking.paid && (
                                            <span className='text-success font-bold ms-2'>
                                                Paid
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        {booking.price && !booking.paid && (
                                            <button
                                                onClick={() =>
                                                    handleCancel(
                                                        booking._id,
                                                        booking.treatment
                                                    )
                                                }
                                                className='btn btn-error btn-sm text-white'
                                            >
                                                cancel
                                            </button>
                                        )}
                                        {booking.price && booking.paid && (
                                            <span className='text-3xl ms-5'>
                                                😀
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyAppointment;
