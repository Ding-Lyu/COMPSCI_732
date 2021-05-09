import React, { Component } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
} from "antd";
import axios from "axios";

const { Option } = Select;

export default class RegistDrawerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      name: "",
      mobile: "",
      email: "",
      dob: "",
      gender: "",
      address: "",
      password: "",
      confirmPassword: "",
      errors: {},
    };
  }

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  onClickSubmit = async () => {
    try {
      // API call to the NODE.JS
      this.setState({ errors: {} });
      const { data } = await axios.post("/signup", { ...this.state });
      console.log(data);
      // Store token in AXIOS and browser's local store
      const token = data.data.token;
      axios.defaults.headers.common["Authorization"] = token;
      localStorage.setItem("token", token);
      this.props.setAuth();
      this.setState({ visible: false });
    } catch (error) {
      this.setState({ errors: error.response.data.errors });
    }
  };

  render() {
    return (
      <>
        <Button
          style={{ float: "right", margin: "10px", color: "white" }}
          type="primary"
          onClick={this.showDrawer}
        >
          Register
        </Button>
        <Drawer
          title="Create a new account"
          width={"100%"}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClickSubmit} type="primary">
                Submit
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[
                    { required: true, message: "Please enter user name" },
                  ]}
                >
                  <Input
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                    placeholder="Please enter user name"
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="Date of Birth"
                  label="Date of Birth"
                  rules={[
                    { required: true, message: "Please enter user name" },
                  ]}
                >
                  <DatePicker
                    style={{ width: "100%" }}
                    getPopupContainer={(trigger) => trigger.parentElement}
                    value={this.state.dob}
                    onChange={(e) => this.setState({ dob: e.toISOString() })}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="Gender"
                  label="Gender"
                  rules={[
                    { required: true, message: "Please select an owner" },
                  ]}
                >
                  <Select
                    placeholder="Please select gender"
                    value={this.state.gender}
                    onChange={(e) => this.setState({ gender: e.valueOf() })}
                  >
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="Address"
                  label="Address"
                  rules={[
                    { required: true, message: "Please enter your address" },
                  ]}
                >
                  <Input
                    placeholder="Please enter your address"
                    value={this.state.address}
                    onChange={(e) => this.setState({ address: e.target.value })}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="Eamil"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your email address",
                    },
                  ]}
                >
                  <Input
                    placeholder="Please enter your email address"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="Mobile"
                  label="Mobile"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input
                    placeholder="Please enter your phone number"
                    value={this.state.mobile}
                    onChange={(e) => this.setState({ mobile: e.target.value })}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="password"
                  label="Password"
                  rules={[
                    { required: true, message: "Please enter your password" },
                  ]}
                >
                  <Input.Password
                    placeholder="Please enter your password"
                    value={this.state.password}
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="confirm-password"
                  label="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please re-enter your password",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Please re-enter your password"
                    value={this.state.confirmPassword}
                    onChange={(e) =>
                      this.setState({ confirmPassword: e.target.value })
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>

          {this.state.errors && (
            <ul style={{ color: "red" }}>
              {Object.values(this.state.errors).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          )}
        </Drawer>
      </>
    );
  }
}
