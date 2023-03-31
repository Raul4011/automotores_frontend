import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOGIN } from "../routes/paths";
import { useAuthContext } from "../context/authContext";

const PrivateRoute = () => {
  const { authenticate } = useAuthContext()

  if (!authenticate) {
    return <Navigate to={LOGIN} />
  }

  return  <div>
            <Outlet />
          </div>

};

export default PrivateRoute;
