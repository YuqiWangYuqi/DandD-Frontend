import React, {Component} from 'react';
import { Row, Col, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

class OrderDetails extends Component {
  render() {
    return (
      <Row className="order-details">
        <Button type="primary"
                size="default"
                className="previous-btn"><ArrowLeftOutlined />
        </Button>
        <div className="order-id">
          Order ID: #XXXXX
        </div>
        <Col span={8} className="left-side">
          left
        </Col>
        <Col span={14} className="right-side">
          right
        </Col>
      </Row>
    );
  }
}

export default OrderDetails;
