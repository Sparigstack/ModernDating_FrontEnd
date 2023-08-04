import React, { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
// import { AuthContext } from "./Auth";

export default function RequiredAuth() {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to={{ pathname: "/", state: { from: location } }} replace />
    );
  } else {
    return <Outlet />;
  }
}
