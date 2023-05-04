import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../screens/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
