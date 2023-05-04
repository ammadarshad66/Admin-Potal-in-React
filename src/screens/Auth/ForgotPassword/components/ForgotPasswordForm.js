import React from "react";
import { Form, Input, Button } from "antd";
const ForgotPasswordForm = () => {
  return (
    <Form layout="vertical" className="auth-form">
      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Email is required!" },
          { type: "email", message: "Enter valid email!" },
        ]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>
      <Button
        htmlType="submit"
        type="primary"
        className="w-100 extra-bold-font h-40px"
      >
        Send
      </Button>
    </Form>
  );
};

export default ForgotPasswordForm;
