import {Route, Routes} from "react-router-dom";
import { SignUp } from "./Components/Pages/SignUp";
import { Login } from "./Components/Pages/Login";


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    );
};