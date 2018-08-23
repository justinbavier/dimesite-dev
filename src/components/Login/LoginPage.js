import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import LoginForm from './LoginForm';

import PrimaryLogoDark from '../../images/primary-logo-dark.svg';

class LoginPage extends Component {
  render() {
    return (
      <div className="login-content-wrapper">
        <Row gutter={16} style={{ paddingBottom: '3.5%' }}>
          <Col
            xs={{ span: 12, offset: 6 }}
            sm={{ span: 8, offset: 8 }}
            md={{ span: 8, offset: 8 }}
            lg={{ span: 6, offset: 9 }}
            xl={{ span: 6, offset: 9 }}
          >
            <img alt="primary-logo-dark" src={PrimaryLogoDark} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col
            style={{ paddingBottom: '3.5%' }}
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            md={{ span: 12, offset: 6 }}
            lg={{ span: 8, offset: 4 }}
            xl={{ span: 6, offset: 6 }}
          >
            <h2>
              {` Log in to Dime. `}
            </h2>
            <LoginForm {...this.props} />
          </Col>
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 20, offset: 2 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
          >
            <Row>
              <p>
                {` Don't have an account? `}
              </p>
            </Row>
            <Row>
              <Link to="/signup">
                {` Sign up for Dime `}
              </Link>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps({ err }) {
  return { err };
}

export default connect(mapStateToProps)(LoginPage);
