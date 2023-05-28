import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import backgroundImg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <header>
            <div
                className='hero lg:h-[800px] mb-12 lg:m-0'
                style={{
                    background: `url(${backgroundImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '8px',
                }}
            >
                <div className='hero-content flex-col lg:flex-row-reverse'>
                    <img src={chair} className='rounded-lg lg:w-1/2' />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                        <p>You have selected : {format(selectedDate, 'PP')}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;
