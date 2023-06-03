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

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
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
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />,
            },
        ],
    },
]);
