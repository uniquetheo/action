import Lottie from "lottie-react";
import loginAnimation from "../assets/lottie/lottieLogin.json";
import logo from "../assets/nic_logo_transparent.png";
import {useState} from "react";
import Input from "./commons/Input.jsx";

export const SignIn = () => {

    const labels = ['Name', 'Email', 'Region', 'City', 'Address', 'Password', 'Confirm Password']

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="w-full flex h-screen overflow-hidden">
            <div className="w-[60%] h-full">
                <Lottie animationData={loginAnimation} />
            </div>
            <div className="w-[40%] flex flex-col items-center justify-center px-10 gap-10">
                <div className="w-40 h-40 overflow-hidden">
                    <img src={logo} alt="" className="w-full h-full object-cover"/>
                </div>
                <form onSubmit={handleSubmit} className=" w-full">
                    <h1 className="text-center text-2xl">Please Enter School Details below</h1>
                    <div className="grid grid-cols-2 gap-6 mt-8">
                        {labels.map((label) => {
                            return <Input name={label.toLowerCase()} label={label} type={label.toLowerCase() === 'password' ? 'password' : 'text'}/>
                        })}
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white text-lg py-2 rounded-md mt-14">Sign Up</button>
                    <h4 className="text-center mt-4">Already have an account? <span className="text-blue-500 cursor-pointer">Sign In</span></h4>
                </form>
            </div>
        </div>
    );
};