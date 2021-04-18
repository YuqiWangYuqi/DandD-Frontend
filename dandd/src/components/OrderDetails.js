import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Row, Col, Button, Steps} from 'antd';
import { ArrowLeftOutlined, UserOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { useParams } from 'react-router-dom';

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: 47.606209, lng: -122.332069}}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));
const { Step } = Steps;

function OrderDetails() {
  const { order_id } = useParams();
  const url = `https://6079bca0460a6600174fc355.mockapi.io/Order_Details/${order_id}`;
  console.log("user id: " + order_id)
  const [order, setOrder] = useState(null);

  let content = null;

  useEffect(()=> {
    axios.get(url)
      .then(response => {
        setOrder(response.data)
      })
  }, [url])

  if(order) {
    content =
      <Row className="order-details">
        <Button type="primary"
                size="default"
                className="previous-btn"><ArrowLeftOutlined />
        </Button>
        <div className="order-id">
          Order ID: #{order.order_id}
        </div>
        <Col span={9} className="left-side">
          <div>
            <div className="order-status">
              <p>Order Status: {order.order_status.toString()}</p>
            </div>
            <div className="estimate-time">
              <p>Estimate Delivery Time: {order.estimate_time}</p>
            </div>
            <div className="address">
              <p>Address: {order.address}, {order.city} {order.state}</p>
            </div>
            <div className="order-progress-bar">
              <Steps>
                <Step status="finish" title="Dispatch" icon={<UserOutlined/>}/>
                <Step status="process" title="Delivering" icon={<LoadingOutlined/>}/>
                <Step status="wait" title="Done" icon={<SmileOutlined/>}/>
              </Steps>
            </div>
          </div>
        </Col>
        <Col span={13} className="right-side">
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{height: `100%`}}/>}
            containerElement={<div style={{height: `100%`}}/>}
            mapElement={<div style={{height: `100%`}}/>}
          >
          </WrappedMap>
        </Col>
      </Row>
  }

  return (
    <div>
      {content}
    </div>
  )
}

export default OrderDetails;
