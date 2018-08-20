import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Menu } from 'antd';
import * as actions from '../actions';

import LogoutButton from './LogoutButton';

import SecondaryLogo from '../images/secondary-logo.svg';

const { Header } = Layout;

class Navigation extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return (
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '70px', float: 'right' }}
          >
            <Menu.Item key="1">
              <Link to="/login">
                {` Login `}
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/signup">
                {` Join `}
              </Link>
            </Menu.Item>
          </Menu>
        )
      default:
        return (
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '70px', float: 'right' }}
          >
            <Menu.Item key="1">
              <LogoutButton />
            </Menu.Item>
          </Menu>
        )
    }
  }
  render() {
    return (
      <Header>
        <Row>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 5 }} xl={{ span: 5 }}>
            <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }}>
              <Link to="/">
                <img alt="secondary-logo" src={SecondaryLogo} />
              </Link>
            </Col>
          </Col>
          <Col
            xs={{ span: 0 }}
            sm={{ span: 0 }}
            md={{ span: 18 }}
            lg={{ span: 19 }}
            xl={{ span: 19 }}
          >
            {this.renderContent()}
          </Col>
        </Row>
      </Header>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Navigation);
