import React, { Component } from 'react';

import { Col, Row, Button } from 'antd';

import PrimaryLogo from '../images/primary-logo.svg';

class Landing extends Component {
  render() {
    return (
      <div className="landing-content-wrapper">
        <Row>
          <Col
            xs={{ span: 6, offset: 9 }}
            sm={{ span: 6, offset: 9 }}
            md={{ span: 6, offset: 9 }}
            lg={{ span: 6, offset: 9 }}
            xl={{ span: 6, offset: 9 }}
          >
            <img alt="primary-logo" src={PrimaryLogo} />
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ span: 4, offset: 10 }}
            sm={{ span: 4, offset: 10 }}
            md={{ span: 4, offset: 10 }}
            lg={{ span: 4, offset: 10 }}
            xl={{ span: 4, offset: 10 }}
          >
          <Button type="">
            {` Learn More `}
          </Button>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Landing;
