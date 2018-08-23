import React, { Component } from 'react';

import { Col, Row } from 'antd';

import WrappedEmailSignup from './EmailSignup';

import PrimaryLogo from '../images/primary-logo.svg';
import Phones from '../images/phones.svg';


class Landing extends Component {
  render() {

    return (
      <div className="landing-content-wrapper">
        <Row type="flex" gutter={24} align="middle">
          <Col
            style={{ textAlign: 'left' }}
            xs={{ span: 18, offset: 3 }}
            sm={{ span: 18, offset: 3 }}
            md={{ span: 18, offset: 3 }}
            lg={{ span: 6, offset: 4 }}
            xl={{ span: 6, offset: 4 }}
          >
            <Row style={{ paddingBottom: '15%' }}>
              <img alt="primary-logo" src={PrimaryLogo} />
            </Row>
            <Row>
              <p style={{ fontSize: '175%', color: 'white' }}>
                {` Contact us to learn more. `}
              </p>
            </Row>
            <Row>
              <p style={{ fontSize: '150%', color: '#2b2f37' }}>
                {` Contact us to learn more. `}
              </p>
            </Row>
            <Row>
              <WrappedEmailSignup />
            </Row>
          </Col>
          <Col
            style={{ textAlign: 'right' }}
            xs={{ span: 0 }}
            sm={{ span: 0 }}
            md={{ span: 0 }}
            lg={{ span: 10, offset: 2 }}
            xl={{ span: 10, offset: 2 }}
          >
            <Row>
              <img alt="phones" src={Phones} />
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Landing;
