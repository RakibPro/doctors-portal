import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../../Layout/MainLayout';
import SecondaryLayout from '../../Layout/SecondaryLayout';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import Testimonial from '../../Pages/Home/Testimonial/Testimonial';
import Contact from '../../Pages/Home/Contact/Contact';
import SignUp from '../../Pages/SignUp/SignUp';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import DashboardLayout from '../../Layout/DashboardLayout';
import MyAppointment from '../../Pages/Dashboard/MyAppointment/MyAppointment';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import AdminRoute from '../AdminRoute/AdminRoute';
import AddDoctor from '../../Pages/Dashboard/AddDoctor/AddDoctor';
import ManageDoctors from '../../Pages/Dashboard/ManageDoctors/ManageDoctors';
import Payment from '../../Pages/Dashboard/Payment/Payment';
import DisplayError from '../../Pages/Shared/DisplayError/DisplayError';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/appointment',
                element: <Appointment />,
            },
            {
                path: '/reviews',
                element: (
                    <PrivateRoute>
                        <Testimonial />
                    </PrivateRoute>
                ),
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
    {
        path: '/',
        element: <SecondaryLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/dashboard',
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: '/dashboard',
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        errorElement: <DisplayError />,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment />,
            },
            {
                path: '/dashboard/allusers',
                element: (
                    <AdminRoute>
                        <AllUsers />
                    </AdminRoute>
                ),
            },
            {
                path: '/dashboard/adddoctor',
                element: (
                    <AdminRoute>
                        <AddDoctor />
                    </AdminRoute>
                ),
            },
            {
                path: '/dashboard/managedoctors',
                element: (
                    <AdminRoute>
                        <ManageDoctors />
                    </AdminRoute>
                ),
            },
            {
                path: '/dashboard/payment/:id',
                element: (
                    <AdminRoute>
                        <Payment />
                    </AdminRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/bookings/${params.id}`),
            },
        ],
    },
]);
