import React, { Component } from "react";
import Login from "./Login";
import imgURL from "../img/logo.png";
import axios from "axios";

export default class LoginMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  login = async () => {
    try {
      const { data } = await axios.post("");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="login-home">
        <center>
          <img style={{ width: "30%", marginTop: "50px" }} src={imgURL} />
        </center>
        <center>
          <Login setAuth={this.props.setAuth}></Login>
        </center>
      </div>
    );
  }
}

// import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker,Checkbox } from 'antd';
// import React, { Component } from 'react';

// const { Option } = Select;

// export default class LoginDrawerForm extends Component {
//   state = { visible: false };

//   showDrawer = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   onClose = () => {
//     this.setState({
//       visible: false,
//     });
//   };

//   render() {
//     return (
//       <>
//         <Button type="primary" onClick={this.showDrawer}>
//           Login
//         </Button>
//         <Drawer
//           title="Create a new account"
//           width={'100%'}
//           onClose={this.onClose}
//           visible={this.state.visible}
//           bodyStyle={{ paddingBottom: 80 }}
//           footer={
//             <div
//               style={{
//                 textAlign: 'right',
//               }}
//             >
//               <Button onClick={this.onClose} style={{ marginRight: 8 }}>
//                 Cancel
//               </Button>
//               <Button onClick={this.onClose} type="primary">
//                 Login
//               </Button>
//             </div>
//           }
//         >
//           <Form layout="vertical" hideRequiredMark>
//             <Row gutter={16}>
//               <Col span={12}>
//               <Form.Item label="Username" name="username"
//             rules={[
//             {
//                  required: true,
//                  message: 'Please input your username!',
//             },
//             ]}
//           >
//           <Input />
//           </Form.Item>
//               </Col>
//             </Row>
//             <Row gutter={16}>
//               <Col span={12}>
//               <Form.Item label="Password" name="password"
//             rules={[
//             {
//               required: true,
//               message: 'Please input your password!',
//             },
//             ]}
//           >
//           <Input.Password />
//           </Form.Item>
//               </Col>
//             </Row>
//             <Row gutter={16}>
//               <Col span={12}>
//               <Form.Item>
//           <Button type="primary" htmlType="submit">Submit</Button>
//           </Form.Item>
//               </Col>
//             </Row>
//           </Form>
//         </Drawer>
//       </>
//     );
//   }
// }
