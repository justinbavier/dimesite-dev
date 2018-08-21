import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Transaction extends Component {
  render() {
    const { amount, date, roundUp, name } = this.props.transaction;
    return (
      <div className="transaction-card">

        <Row className="transaction-card-date-row">
          <Col
            xs={{ span: 23, offset: 1 }}
            sm={{ span: 23, offset: 1 }}
            md={{ span: 23, offset: 1 }}
            lg={{ span: 23, offset: 1 }}
            xl={{ span: 23, offset: 1 }}
          >
            <p>{` ${date} `}</p>
          </Col>
        </Row>

        <Row className="transaction-card-info-row">

          <Col
            xs={{ span: 17, offset: 1 }}
            sm={{ span: 17, offset: 1 }}
            md={{ span: 17, offset: 1 }}
            lg={{ span: 17, offset: 1 }}
            xl={{ span: 17, offset: 1 }}
          >
            <p style={{ float: 'left' }}>{` ${name} `}</p>
          </Col>

          <Col
            xs={{ span: 4 }}
            sm={{ span: 4 }}
            md={{ span: 4 }}
            lg={{ span: 4 }}
            xl={{ span: 4 }}
          >
            <p style={{ float: 'right' }}>{` $${roundUp} `}</p>
          </Col>

        </Row>

      </div>
    )
  }
}

export default Transaction;
