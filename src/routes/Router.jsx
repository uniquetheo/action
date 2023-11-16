import {Route, Routes, createBrowserRouter, RouterProvider} from "react-router-dom";
import {SignUp} from "../Pages/Signup.jsx";
import {Login} from "../Pages/Login.jsx";
import {Register} from "../Pages/Register.jsx";
import Dashboard from "../Pages/Dashboard.jsx";
import ProtectedDashboard from "../routes/protectedRoutes/ProtectedDashboard.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        loader: () => {
            console.log("loading login page");
            return null
        }
    },
    {path: '/signup', element: <SignUp />},
    {path: '/register', element: <Register />},
    {
        path: '/dashboard',
        element: <ProtectedDashboard>
                    <Dashboard />
                </ProtectedDashboard>
    }
]);


export const Router = () => {
    return (
        <RouterProvider router={router} />
    );
};