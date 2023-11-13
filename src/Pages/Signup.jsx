import Lottie from "lottie-react";
import loginAnimation from "../assets/lottie/lottieLogin.json";
import logo from "../assets/nic_logo_transparent.png";
import { useState } from "react";
import Input from "../Components/commons/Input.jsx";
import { StyledButton } from "../Components/Button/Button.styles.jsx";

export const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    region: "",
    city: "",
    address: "",
    password: "",
    "confirm password": "",
  });

  const labels = [
    "Name",
    "Email",
    "Region",
    "City",
    "Address",
    "Password",
    "Confirm Password",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="w-full flex h-screen overflow-hidden">
      <div className="w-[50%] h-full bg-gray-100 flex justify-center ">
        <Lottie animationData={loginAnimation} />
      </div>
      <div className="w-[50%] flex flex-col items-center justify-center px-10 gap-10 shadow-md ">
        <div className="w-40 h-40 overflow-hidden">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        <form onSubmit={handleSubmit} className=" w-full">
          <h1 className="text-center text-2xl">Please enter school details</h1>
          <div className="grid grid-cols-2 gap-6 mt-8">
            {labels.map((label) => {
              return (
                <Input
                  key={label}
                  name={label.toLowerCase()}
                  label={label}
                  data={data}
                  setData={setData}
                  type={
                    label.toLowerCase().includes("password")
                      ? "password"
                      : "text"
                  }
                />
              );
            })}
          </div>

          <StyledButton type="submit" className="w-full mt-10" >Sign Up</StyledButton>
          <h4 className="text-center mt-4">
            Already have an account?
            <a href="/" className="text-blue-500 cursor-pointer "> Sign In</a>
          </h4>
        </form>
      </div>
    </div>
  );
};
