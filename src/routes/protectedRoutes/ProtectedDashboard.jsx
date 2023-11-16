import {Navigate} from "react-router-dom";


const ProtectedDashboard = ({children}) => {
  const accessToken = document.cookie.split(";").find((cookie) => cookie.split("=")[0] === "accessToken")?.split("=")[1];

    if (!accessToken) {
        return <Navigate to='/' replace/>
    }
    return (
        <>
            {children}
        </>
    );
};

export default ProtectedDashboard;