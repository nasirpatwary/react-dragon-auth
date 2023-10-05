import { useContext } from "react";
import { AuthConText } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthConText)
    const location = useLocation()
    console.log(location.pathname);
    if(loader){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if (user) {
        return children         
    }
       return <Navigate state={location.pathname} to="/login"></Navigate>
       
};

export default PrivateRoute;