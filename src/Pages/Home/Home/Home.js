import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import TreatmentCard from '../TreatmentCard/TreatmentCard';

const Home = () => {
    return (
        <div className='mx-6'>
            <Banner />
            <InfoCards />
            <Services />
            <TreatmentCard />
        </div>
    );
};

export default Home;
