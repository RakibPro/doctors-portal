import React from 'react';
import HomeBanner from '../HomeBanner/HomeBanner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import TreatmentCard from '../TreatmentCard/TreatmentCard';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className='mx-6'>
            <HomeBanner />
            <InfoCards />
            <Services />
            <TreatmentCard />
            <MakeAppointment />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default Home;
