import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Image } from "antd";
import axios from "axios";

export default function Login(props) {
  //Hook useState
  // const [count,setCount] = useState(0)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const login = async () => {
    setHasError(false);
    try {
      // API call to the NODE.JS
      const { data } = await axios.post("/login", { email, password });
      // console.log(data);
      // Store token in AXIOS and browser's local store
      const token = data.data.token;
      axios.defaults.headers.common["Authorization"] = token;
      localStorage.setItem("token", token);
      props.setAuth();
    } catch (error) {
      setHasError(true);
      // console.log(error.response.data);
    }
  };

  //login form layout set up
  const Formlayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 16,
    },
  };
  //Button and Checkbox layout setup
  const tailLayout = {
    wrapperCol: {
      offset: 10,
      span: 16,
    },
  };
  return (
    <div style={{ marginTop: "10%" }}>
      {hasError && (
        <h3 style={{ color: "red" }}>In valid email and password!</h3>
      )}
      <Form
        {...Formlayout}
        name="basic"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button onClick={login} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
