import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const { appointmentDate, email, patient, treatment, slot, price } = booking;
    return (
        <section>
            <div className='m-14'>
                <h3 className='text-3xl text-black'>
                    Payment for {booking.treatment}
                </h3>
                <br />
                <p className='text-xl'>
                    Please pay <strong>${price}</strong> for your appointment on{' '}
                    {appointmentDate} at {slot}
                </p>
                <div className='w-[28rem] my-10'>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </section>
    );
};

export default Payment;
