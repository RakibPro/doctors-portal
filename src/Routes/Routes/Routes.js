import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Secondary from '../../Layout/Secondary';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Appointment from '../../Pages/Appointment/Appointment/Appointment';
import Testimonial from '../../Pages/Home/Testimonial/Testimonial';
import Contact from '../../Pages/Home/Contact/Contact';
import SignUp from '../../Pages/SignUp/SignUp';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
        element: <Secondary />,
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
]);
