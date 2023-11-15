

const Notification = ({ message, type= 'error', show }) => {
    // const [show, setShow] = useState(false);
    //
    // useEffect(() => {
    //     setShow(true);
    //     setTimeout(() => {
    //     setShow(false);
    //     }, 3000);
    // }, [message]);

    return (
        <div
        className={`fixed top-4 left-0 right-0 mx-auto w-max px-6 py-2 rounded-full flex items-center gap-3 font-medium
        ${type === "success" ? "bg-green-300 text-green-600" : "bg-red-300 text-red-600"} 
        ${show ? "translate-y-0" : "-translate-y-[100px]"} 
        transition-all duration-500 ease-linear`}
        >
        <div className={`w-3 h-3 rounded-full
        ${type === "success" ? "bg-green-500" : "bg-red-500"}
        `}></div>
        <span>{message}</span>
        </div>
    );
};

export default Notification;