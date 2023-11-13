import { useState } from "react";

const Input = ({ label, data, setData, ...rest }) => {
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
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`w-full relative h-10 px-3 ${
        isFocused ? "border-2 border-blue-500 rounded-md" : "border-b-2"
      }`}
    >
      <span
        className={`absolute text-gray-400 transition duration-300 ease-linear ${
          isFocused ? "-translate-y-[10px] bg-white text-sm" : "bottom-3"
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
  );
};

export default Input;
