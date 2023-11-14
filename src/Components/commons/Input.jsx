import { useState } from "react";

const Input = ({ label, data, setData, isError, setIsError, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handelBlur = () => {
    if (data[label.toLowerCase()].trim() === "") {
      setIsFocused(!isFocused);
    }
  };

  const handleChange = (e) => {
    if (e.target.value.trim() === "") {
      setIsError((prev) => {
        return {
          ...prev,
          [e.target.name]: true,
        };
      });
    } else {
      setIsError((prev) => {
        return {
          ...prev,
          [e.target.name]: false,
        };
      });
    }
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div
        className={`w-full relative h-10 px-3 ${
          isFocused || isError[label.toLowerCase()] ? "border-2 border-blue-500 rounded-md" : "border-b-2"
        } ${isError[label.toLowerCase()] && "border-red-500"}`}
      >
        <span
          className={`absolute text-gray-400 transition duration-300 ease-linear ${
            isFocused || isError[label.toLowerCase()] ? "-translate-y-[10px] bg-white text-sm" : "bottom-3"
          }`}
        >
          {label}
        </span>
        <input
          {...rest}
          value={data[label.toLowerCase()]}
          className="bg-transparent absolute inset-0 focus:outline-0 px-3"
          onFocus={handleFocus}
          onBlur={handelBlur}
          onChange={handleChange}
        />
      </div>
      {isError[label.toLowerCase()] && (
        <p className="text-sm text-red-500">
          {label} field cannot be empty
        </p>
      )}
    </div>
  );
};

export default Input;
