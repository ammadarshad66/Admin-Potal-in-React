import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { DataRequestAction } from "../../../../context/CommonHttp";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../../../Context";

const LoginForm = () => {
  const navigation = useNavigate();
  const { setConfig, config } = useApi();
  const onFinish = (values) => {
    DataRequestAction(
      "post",
      "login",
      setConfig,
      values,
      "loginRecord",
      "loginSpin",
      "loginSuccess",
      "loginError"
    );
  };
  return (
    <Form layout="vertical" className="auth-form" onFinish={onFinish}>
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
        label="Password"
        name="password"
        rules={[{ required: true, message: "Password is required!" }]}
      >
        <Input.Password placeholder="Enter your password" />
      </Form.Item>
      <div className="d-flex align-items-center justify-content-between">
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <span
            onClick={() => navigation("/forgotPassword")}
            className="bold-font color-973BFF pointer text-decoration-underline"
          >
            Forgot Password
          </span>
        </Form.Item>
      </div>
      <Button
        loading={config && config.loginSpin}
        disabled={config && config.loginSpin}
        htmlType="submit"
        type="primary"
        className="w-100 extra-bold-font h-40px"
      >
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
