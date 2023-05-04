import React from "react";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { Col, Row } from "antd";
const AuthLayout = ({ title, content, children, rightSideImage }) => {
  return (
    <Row className="auth-layout">
      {/* ================ LeftSide =============== */}
      <Col xl={12} lg={12} md={14} sm={24} xs={24}>
        <LeftSide title={title} content={content}>
          {children}
        </LeftSide>
      </Col>
      {/* ================ RightSide =============== */}
      <Col
        className="auth-right-side d-md-block d-none"
        xl={12}
        lg={12}
        md={10}
      >
        <RightSide rightSideImage={rightSideImage} />
      </Col>
    </Row>
  );
};

export default AuthLayout;
