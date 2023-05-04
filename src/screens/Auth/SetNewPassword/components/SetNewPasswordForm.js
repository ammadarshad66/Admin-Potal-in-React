import React from "react";
import { Form, Input, Button } from "antd";
const SetNewPasswordForm = () => {
  return (
    <Form layout="vertical" className="auth-form">
      <Form.Item label="Password">
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      <Form.Item label="Confirm password">
        <Input.Password placeholder="Enter your confirm password" />
      </Form.Item>
      <Button type="primary" className="w-100 extra-bold-font h-40px">
        Reset Password
      </Button>
    </Form>
  );
};

export default SetNewPasswordForm;
