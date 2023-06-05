import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Pages/Shared/Loading/Loading';
import useAdmin from '../../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading, logOut } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    console.log(isAdmin);

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loading />;
    } else if (user && isAdmin) {
        return children;
    } else if (!isAdmin) {
        logOut();
    }

    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default AdminRoute;
