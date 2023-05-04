import React from "react";
import AuthLayout from "../../../components/AuthLayout";
import LoginForm from "./components/SignupForm";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigation = useNavigate();
  return (
    <AuthLayout title="Get started" content="Crate your account now">
      <LoginForm />
      <div className="d-flex gap-1 mt-3 mb-5 justify-content-center w-100">
        <span className="font-14 mb-0 regular-font color-9C9EA5">
          Have an account?{" "}
        </span>
        <span
          onClick={() => navigation(-1)}
          className="bold-font font-14 color-973BFF pointer text-decoration-underline"
        >
          Login
        </span>
      </div>
    </AuthLayout>
  );
};

export default Index;
