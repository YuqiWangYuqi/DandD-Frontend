import React, {Component} from 'react';
import { Row, Col, Button, Steps} from 'antd';
import { ArrowLeftOutlined, UserOutlined, ThunderboltOutlined, SmileOutlined } from '@ant-design/icons';
import Data from "../testData.json";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const orderData = Data.orders;
const { Step } = Steps;

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: 47.606209, lng: -122.332069}}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

class OrderDetails extends Component {
  render() {
    return (
      <Row className="order-details">
        <Button type="primary"
                size="default"
                className="previous-btn"><ArrowLeftOutlined />
        </Button>
        <div className="order-id">
          {
            orderData.map((s)=>{
              return(<p>Order ID: #{s.Order_id}</p>)
            })
          }
        </div>
        <Col span={8} className="left-side">
          {
            orderData.map((s) => {
              return (
                <div>
                  <div className="order-status">
                    Order Status: {s.Order_status.toString()}
                  </div>
                  <div className="estimate-time">
                    Estimate Delivery Time: {s.Estimated_Delivery_Time}
                  </div>
                  <div className="address">
                    Address: {s.Address}
                  </div>
                  <div className="order-progress-bar">
                    <Steps>
                      <Step status="finish" title="Dispatch" icon={<UserOutlined />} />
                      <Step status="process" title="Delivering" icon={<ThunderboltOutlined />} />
                      <Step status="wait" title="Done" icon={<SmileOutlined />} />
                    </Steps>
                  </div>
                </div>
              )
            })
          }
        </Col>
        <Col span={14} className="right-side">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{height: `100%`}}/>}
            containerElement={<div style={{height: `100%`}}/>}
            mapElement={<div style={{height: `100%`}}/>}
          >
          </WrappedMap>
        </Col>
      </Row>
    );
  }
}

export default OrderDetails;
