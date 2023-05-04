import React from "react";
import { Form, Input, Button } from "antd";
const SignupForm = () => {
  return (
    <Form layout="vertical" className="auth-form">
      <Form.Item
        label="Name"
        name="fullName"
        rules={[{ required: true, message: "Name is required!" }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>
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
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: "Password is required!" }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      <Button
        htmlType="submit"
        type="primary"
        className="w-100 extra-bold-font h-40px mt-3"
      >
        Sign up
      </Button>
    </Form>
  );
};

export default SignupForm;
