import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import ScaleLoader from 'react-spinners/ScaleLoader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
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
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
