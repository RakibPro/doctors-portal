import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Secondary = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Secondary;
