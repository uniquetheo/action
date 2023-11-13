import {Route, Routes} from "react-router-dom";
import {SignUp} from "./Pages/Signup";
import {Login} from "./Pages/Login.jsx";
import {Register} from "./Pages/Register.jsx";



export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/register' element={<Register />}/>
        </Routes>
    );
};