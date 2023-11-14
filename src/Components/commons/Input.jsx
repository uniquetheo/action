import { useState } from "react";

const Input = ({ label, data, setData, isError, setIsError, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const objectKey = label === "Confirm Password" ? "confirmPassword" : label.toLowerCase();
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
          [objectKey]: true,
        };
      });
    } else {
      setIsError((prev) => {
        return {
          ...prev,
          [objectKey]: false,
        };
      });
    }
    setData({
      ...data,
      [objectKey]: e.target.value,
    });
  };

  return (
    <div>
      <div
        className={`w-full relative h-10 px-3 ${
          isFocused || isError[objectKey] ? "border-2 border-blue-500 rounded-md" : "border-b-2"
        } ${isError[objectKey] && "border-red-500"}`}
      >
        <span
          className={`absolute text-gray-400 transition duration-300 ease-linear ${
            isFocused || isError[objectKey] ? "-translate-y-[10px] bg-white text-sm" : "bottom-3"
          }`}
        >
          {label}
        </span>
        <input
          {...rest}
          value={data[objectKey]}
          className="bg-transparent absolute inset-0 focus:outline-0 px-3"
          onFocus={handleFocus}
          onBlur={handelBlur}
          onChange={handleChange}
        />
      </div>
      {isError[objectKey] && (
        <p className="text-sm text-red-500">
          {label} field cannot be empty
        </p>
      )}
    </div>
  );
};

export default Input;
