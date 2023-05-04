import React from "react";
import Image from "../../../assets/images/logo.png";
const Logo = () => {
  return (
    <div className="d-flex flex-md-row flex-column align-items-center justify-content-md-start justify-content-center px-md-4 px-0 gap-2 pt-5 pt-md-4">
      <img width="40px" src={Image} alt="auth-logo" />
      <h4 className="mb-0 extra-bold-font" style={{ color: "#A666F4" }}>
        Company Name
      </h4>
    </div>
  );
};

export default Logo;
