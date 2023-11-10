import {Route, Routes} from "react-router-dom";
import {Login} from "./Components/Login.jsx";
import {Signup} from "./Components/Signup.jsx";
import {SignIn} from "./Components/SignIn.jsx";


export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<SignIn />}/>
            <Route path='/signup' element={<Signup />}/>
        </Routes>
    );
};