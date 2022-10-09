import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  let auth = true;
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default RequireAuth;
