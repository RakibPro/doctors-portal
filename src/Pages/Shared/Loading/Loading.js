import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';

const Loading = () => {
    return (
        <div className='flex justify-center my-24'>
            <ScaleLoader
                color='#19D3AE'
                height={60}
                margin={5}
                radius={10}
                width={10}
            />
        </div>
    );
};

export default Loading;
