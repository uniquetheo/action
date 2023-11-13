import {Route, Routes} from "react-router-dom";
import {SignIn} from "./Components/Pages/SignIn";
import {Signup} from "./Components/Pages/Signup";



export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};