import React from "react";
import AuthLayout from "../../../components/AuthLayout";
import SetNewPasswordForm from "./components/SetNewPasswordForm";
import { BiArrowBack } from "react-icons/bi";

const Index = () => {
  return (
    <AuthLayout title="Set new password?">
      <SetNewPasswordForm />
      <div className="d-flex gap-2 mt-3 mb-5 align-items-center justify-content-center w-100">
        <BiArrowBack size={18} />
        <span className="bold-font font-14 color-111827 pointer">
          Back to log in
        </span>
      </div>
    </AuthLayout>
  );
};

export default Index;
