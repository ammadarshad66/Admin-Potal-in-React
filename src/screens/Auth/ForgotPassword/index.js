import React from "react";
import AuthLayout from "../../../components/AuthLayout";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigation = useNavigate();
  return (
    <AuthLayout
      title="Forgot Password?"
      content="No worries, we'll send reset instructions."
    >
      <ForgotPasswordForm />
      <div className="d-flex gap-2 mt-3 mb-5 align-items-center justify-content-center w-100">
        <span
          onClick={() => navigation("/login")}
          className="d-flex gap-2 align-items-center justify-content-center"
        >
          <BiArrowBack size={18} />
          <span className="bold-font font-14 color-111827 pointer">
            Back to log in
          </span>
        </span>
      </div>
    </AuthLayout>
  );
};

export default Index;
