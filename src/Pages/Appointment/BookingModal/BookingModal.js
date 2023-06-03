import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name: treatmentName, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const slot = form.slot.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            phone,
            email,
        };

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Success');
                    refetch();
                } else {
                    setTreatment(null);
                    toast.error(data.message);
                }
            });
    };

    return (
        <>
            <input
                type='checkbox'
                id='booking-modal'
                className='modal-toggle'
            />
            <div className='modal'>
                <div className='modal-box relative'>
                    <label
                        htmlFor='booking-modal'
                        className='btn btn-sm btn-circle absolute right-2 top-2 border-none bg-accent text-[#8391AD]'
                    >
                        ✕
                    </label>
                    <h3 className='text-lg font-bold text-black'>
                        {treatmentName}
                    </h3>
                    <form
                        onSubmit={handleBooking}
                        className='grid gap-6 grid-cols-1'
                    >
                        <input
                            type='text'
                            disabled
                            value={date}
                            className='input w-full mt-10 bg-[#E6E6E6]'
                        />
                        <select
                            name='slot'
                            className='select w-full bg-[#E6E6E6]'
                        >
                            {slots.map((slot, i) => (
                                <option key={i} value={slot}>
                                    {slot}
                                </option>
                            ))}
                        </select>
                        <input
                            name='name'
                            type='text'
                            placeholder='Full Name'
                            defaultValue={user?.displayName}
                            disabled
                            className='input input-bordered w-full'
                        />
                        <input
                            name='email'
                            type='email'
                            placeholder='Email'
                            defaultValue={user?.email}
                            disabled
                            className='input input-bordered w-full'
                        />
                        <input
                            name='phone'
                            type='text'
                            placeholder='Phone Number'
                            className='input input-bordered w-full'
                        />
                        <input
                            type='submit'
                            value='Submit'
                            className='btn btn-accent text-[#D4D9E3] input w-full uppercase'
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;
