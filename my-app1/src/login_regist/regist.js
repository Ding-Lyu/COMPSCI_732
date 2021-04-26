import React, {Component} from 'react'
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';

const { Option } = Select;

export default class RegistDrawerForm extends Component {
  state = { visible: false };

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

  render() {
    return (
      <>
        <Button style={{float:'right',margin:'10px',color:'white'}} type="primary" onClick={this.showDrawer}>
          Regist
        </Button>
        <Drawer
          title="Create a new account"
          width={'100%'}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
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
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <Input placeholder="Please enter user name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                name="Date of Birth"
                label="Date of Birth"
                rules={[{ required: true, message: 'Please enter user name' }]}
                >
                   <DatePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
                   />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="Gender"
                  label="Gender"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                >
                  <Select placeholder="Please select gender">
                    <Option value="Male">Male</Option>
                    <Option value="Female">Female</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="Address"
                  label="Address"
                  rules={[{ required: true, message: 'Please enter your address' }]}
                >
                 <Input placeholder="Please enter your address" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="Eamil"
                  label="Eail"
                  rules={[{ required: true, message: 'Please enter your email address' }]}
                >
                 <Input placeholder="Please enter your email address" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="Mobile"
                  label="Mobile"
                  rules={[{ required: true, message: 'Please enter your phone number' }]}
                >
                 <Input placeholder="Please enter your phone number" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );
  }
}
