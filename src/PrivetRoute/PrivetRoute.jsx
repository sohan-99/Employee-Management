/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../hooks/Loader";

const PrivetRoute = ({ children }) => {
    {
        const { user, loading } = useContext(AuthContext);
        const location = useLocation();
        if (loading) {
            return <Loader />;
        }
        if (!user) {
            return (
                <Navigate to={"/signup"} state={{ from: location }} replace></Navigate>
            );
        }
        return children;
    }
};

export default PrivetRoute;