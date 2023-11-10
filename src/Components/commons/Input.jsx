import {useState} from "react";


const Input = ({ name, label, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('')

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handelBlur = () => {
        if (value.trim() === '') {
            setIsFocused(!isFocused)
        }
    };

    return (
        <div className={`w-full relative h-10 px-3 ${isFocused ? 'border-2 border-blue-500 rounded-md' : 'border-b-2'}`}>
            <span className={`absolute text-gray-400 transition duration-300 ease-linear ${isFocused ? '-translate-y-[10px] bg-white text-sm' : 'bottom-3'}`}>{label}</span>
            <input
                {...rest}
                value={value}
                className="bg-transparent absolute inset-0 focus:outline-0 px-3"
                onFocus={handleFocus}
                onBlur={handelBlur}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default Input;