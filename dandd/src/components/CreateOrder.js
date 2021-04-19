import React, {Component} from 'react';
import {Col, Row, Form, Input, Button, DatePicker, TimePicker, Checkbox} from "antd";
import { SendOutlined } from '@ant-design/icons';

class CreateOrder extends Component {

  render() {
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 12,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };
    const config = {
      rules: [
        {
          type: 'object',
          required: true,
          message: 'Please select time!',
        },
      ],
    };

    const PickupTime = () => {
      const onFinish = (fieldsValue) => {
        // Should format date value before submit.
        const values = {
          ...fieldsValue,
          'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
          'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
        };
        console.log('Received values of form: ', values);
      };
      return (
        <Form{...layout} onFinish={onFinish}>
          <Form.Item name="Pickup Date" label="Pickup Date" {...config}>
            <DatePicker />
          </Form.Item>
          <Form.Item name="Pickup Time" label="Pickup Time" {...config}>
            <TimePicker />
          </Form.Item>
          <Form.Item {...tailLayout} name="fragile" valuePropName="checked">
            <Checkbox>Fragile?</Checkbox>
          </Form.Item>
        </Form>
      );
    };

    const TestForm = () => {
      const onFinish = (values) => {
        console.log('Success:', values);
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      return (
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="FirstName"
            name="firstname"
            rules={[
              {
                required: true,
                message: 'Please input your firstname!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="LastName"
            name="lastname"
            rules={[
              {
                required: true,
                message: 'Please input your lastname!',
              },
            ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Phone#"
            name="phone number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Zipcode"
            name="zipcode"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input/>
          </Form.Item>
        </Form>
      );
    };

    const Package = () => {
      const onFinish = (values) => {
        console.log('Success:', values);
      };

      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

      return (
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Weight(lbs)"
            name="weight"
            rules={[
              {
                required: true,
                message: 'Please input item weight!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Length(inch)"
            name="length"
            rules={[
              {
                required: true,
                message: 'Please input item length!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>


        </Form>
      );
    };


    return (
      <Row className="container">
        <Col span={7} className="sender">
          <h4>Sender Information</h4>
          <TestForm />
        </Col>

        <Col span={7} className="package">
          <h4>Package Information</h4>
          <Package />
          <PickupTime />
        </Col>

        <Col span={7} className="recipient">
          <h4>Recipient Information</h4>
          <TestForm />
          <Button type="primary">Dispatch<SendOutlined /></Button>
        </Col>
      </Row>
    );
  }
}

export default CreateOrder;
