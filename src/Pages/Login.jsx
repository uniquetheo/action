import Lottie from "lottie-react";
import loginAnimation from "../assets/lottie/lottieLogin.json";
import logo from "../assets/nic_logo_transparent.png";
import {useEffect, useState} from "react";
import Input from "../Components/commons/Input.jsx";
import { StyledButton } from "../Components/Button/Button.styles.jsx";
import {validateFields} from "../utils/helpers.js";
import {Link} from "react-router-dom";
import authApi from "../utils/authApi.js";
import Notification from "../Components/commons/Notification.jsx";

export const Login = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState({
    email: false,
    password: false,
  });

  const labels = ["Email", "Password"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShow(!show)
    const isFormValid = validateFields(data, setIsError);

    if (!isFormValid) return;

    const response = await authApi.post("/login", data);
    console.log(response)
  };

  return (
    <div className="w-full flex h-screen overflow-hidden">
      <Notification message="Login failed try again later" show={show} />
      <div className="w-[60%] h-full bg-gray-100 flex justify-center ">
        <Lottie animationData={loginAnimation} />
      </div>
      <div className="w-[40%] flex flex-col items-center justify-center px-10 gap-10 shadow-md">
        <div className="w-40 h-40 overflow-hidden">
          <img src={logo} alt="" className="w-full h-full object-cover" />
        </div>
        <form onSubmit={handleSubmit} className=" w-full">
          <h1 className="text-center text-2xl">
            Please enter school login details
          </h1>
          <div className="grid grid-cols-1 gap-6 mt-8">
            {labels.map((label) => {
              return (
                  <Input
                    key={label}
                    name={label.toLowerCase()}
                    label={label}
                    data={data}
                    setData={setData}
                    isError={isError}
                    setIsError={setIsError}
                    type={
                      label.toLowerCase().includes("password")
                        ? "password"
                        : "text"
                    }
                  />
              );
            })}
          </div>
          <StyledButton type="submit" className="w-full mt-10">
            Login
          </StyledButton>
          <h4 className="text-center mt-4">
            Don't have an account?
            <Link to="/signup"
              className="text-blue-500 cursor-pointer "
            >
              {" "}
              Sign Up
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
};
