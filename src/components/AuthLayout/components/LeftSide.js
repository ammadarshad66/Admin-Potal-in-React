import React from "react";
import Logo from "./Logo";

const LeftSide = ({ title, content, children }) => {
  return (
    <div className="w-100 h-100">
      <Logo />
      <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-md-center justify-content-start mt-md-0 mt-3">
        <div className="auth-left-form-container">
          <div className="mb-4 d-flex flex-column">
            {title && (
              <h1 className="font-34 mb-1 bold-font color-111827">{title}</h1>
            )}
            {content && (
              <p className="font-16 mb-0 regular-font color-8C9197">
                {content}
              </p>
            )}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
