import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useApi } from "../Context";
const ProtectedRoutes = () => {
  const { user } = useApi().config;
  console.log("=======user=====", user);
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
