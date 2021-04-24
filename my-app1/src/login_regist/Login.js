import React, {useState} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { Image } from 'antd';


export default function Login(){
//Hook useState
    // const [count,setCount] = useState(0)

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
    return(
       <div  style={{marginTop: '10%'}}>
       <Form {...Formlayout} name="basic" initialValues={{
            remember: true,
        }}
       >
          <Form.Item label="Username" name="username"
            rules={[
            {
                 required: true,
                 message: 'Please input your username!',
            },
            ]}
          >
          <Input />
          </Form.Item>
  
          <Form.Item label="Password" name="password"
            rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            ]}
          >
          <Input.Password />
          </Form.Item>
  
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
      </Form>
      </div>
    )
}