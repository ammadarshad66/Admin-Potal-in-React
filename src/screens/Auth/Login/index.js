import React from "react";
import AuthLayout from "../../../components/AuthLayout";
import LoginForm from "./components/LoginForm";
import { useApi } from "../../../Context";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigation = useNavigate();
  const { setConfig, config } = useApi();
  if (config && config.loginSuccess) {
    setConfig("loginSuccess", false);
    navigation("/forgotPassword");
  }
  return (
    <AuthLayout
      title="Welcome back"
      content="Welcome back! Please enter your details"
    >
      <LoginForm />
      <div className="d-flex gap-1 mt-3 mb-5 justify-content-center w-100">
        <span className="font-14 mb-0 regular-font color-9C9EA5">
          Don't have an account?{" "}
        </span>
        <span
          onClick={() => navigation("/signup")}
          className="bold-font font-14 color-973BFF pointer text-decoration-underline"
        >
          Sign up
        </span>
      </div>
    </AuthLayout>
  );
};

export default Index;
