import React, { useContext } from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                navigate('/login');
            })
            .catch((error) => {
                // An error happened.
                console.error(error);
            });
    };

    return (
        <div className='m-5 text-center'>
            <p className='text-error mb-2'>Something went wrong</p>
            <p className='text-error'>{error.statusText || error.message}</p>
            <h3 className='text-3xl mt-5'>
                Please{' '}
                <button onClick={handleLogOut} className='link text-secondary'>
                    SignOut
                </button>{' '}
                and Login again
            </h3>
        </div>
    );
};

export default DisplayError;
