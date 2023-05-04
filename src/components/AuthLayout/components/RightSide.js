import React from "react";
import Image from "../../../assets/images/auth-right.png";
const RightSide = ({ rightSideImage = Image }) => {
  return (
    <div className="d-flex align-items-center justify-content-center h-100">
      <img src={rightSideImage} alt="rightSideImage" width="80%" />
    </div>
  );
};

export default RightSide;
