import React, {Component} from 'react';
import {Button, Input, Table} from "antd";
import {PlusOutlined} from '@ant-design/icons'

class Dashboard extends Component {
  render() {
    const {Search} = Input;
    const onSearch = value => console.log(value);

    const columns = [
      {
        title: 'Order ID',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
      },
      { title: 'Date', dataIndex: 'date', key: '1' },
      { title: 'From', dataIndex: 'from', key: '2' },
      { title: 'To', dataIndex: 'to', key: '3' },
      { title: 'Status', dataIndex: 'status', key: '4' },
      {
        title: 'More',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: () => <Button>Details</Button>,
      },
    ];

    const data = [
      {
        key: '1',
        name: '#12354',
        date: '01/05/2021',
        from: '993 Champlin Crossroad, South Jamalfurt, PA',
        to: '222 Heath Island, South Nicklaus WI',
        status: 'Delivered',
      },
      {
        key: '2',
        name: '#12412',
        date: '01/21/2021',
        from: '8884 Lia Hill, Pricemouth, FL',
        to: '475 Redwood Dr. Santa Cruz, CA',
        status: 'Canceled',
      },
      {
        key: '3',
        name: '#13515',
        date: '01/29/2021',
        from: '993 Champlin Crossroad, South Jamalfurt, PA',
        to: '455 Manchester St. Marlton, NJ',
        status: 'Delivered',
      },
      {
        key: '4',
        name: '#15123',
        date: '02/04/2021',
        from: '9727 West Marconi Street Glen Cove, NY',
        to: '7975 Pennsylvania Dr. Jacksonville, NC',
        status: 'Delayed',
      },
      {
        key: '5',
        name: '#13125',
        date: '02/25/2021',
        from: '202 S. Squaw Creek St. Mebane, NC',
        to: '645 Hawthorne Lane La Crosse, WI',
        status: 'Delivered',
      },
    ];

    return (
      <div>
        <div className="dashboard-header">
          <div className="make-order">
            <Button type="primary"
                    size="default"
                    className="order-btn">
              <PlusOutlined/> Create Order
            </Button>
          </div>
          <div className="search-bar">
            <Search
              placeholder="Input Order ID"
              allowClear
              enterButton="Search"
              size="default"
              onSearch={onSearch}
            />
          </div>
        </div>
        <div className="dashboard-container">
          <div>
            <h3>Order History</h3>
          </div>
          <div>
            <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
