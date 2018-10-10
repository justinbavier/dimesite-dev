import React, { Component } from 'react';

import { Col, Row, Button, Icon } from 'antd';

import EmailSignupForm from './EmailSignup/EmailSignupForm';

import Onboarding from './Onboarding/Onboarding';

import PrimaryLogo from '../images/primary-logo.svg';
import Phones from '../images/phones.svg';


class Landing extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.scrollDown = this.scrollDown.bind(this);
  }

  scrollDown() {
    var element = document.getElementById('welcome');
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  renderScrollButton() {
    if (window.innerWidth > 576) {
      return (
        <Col
          className="scroll-button-row"
          xs={{ span: 10, offset: 7 }}
          sm={{ span: 4, offset: 10 }}
          md={{ span: 4, offset: 10 }}
          lg={{ span: 4, offset: 10 }}
          xl={{ span: 4, offset: 10 }}
        >
          <Button 
            className="scroll-button"
            type="secondary"
            size="large"
            onClick={() => this.scrollDown()}
            >
            Learn More
          </Button>
        </Col>
      )
    } else {
      return (
        <Col
          className="arrow-down-row"
          xs={{ span: 24, offset: 0 }}
          sm={{ span: 0, offset: 0 }}
          md={{ span: 0, offset: 0 }}
          lg={{ span: 0, offset: 0 }}
          xl={{ span: 0, offset: 0 }}
        >
          <p style={{ textAlign: 'center', fontSize: '200%', color: 'white' }}>
            <Icon type="down" />
          </p>
        </Col>
      )
    }
  }

  render() {
    return (
      <div>
        <div id="landing" className="landing-content-wrapper">
          <Row type="flex" gutter={24} align="middle">
            <Col
              style={{ textAlign: 'left' }}
              xs={{ span: 18, offset: 3 }}
              sm={{ span: 18, offset: 3 }}
              md={{ span: 18, offset: 3 }}
              lg={{ span: 6, offset: 4 }}
              xl={{ span: 6, offset: 4 }}
            >
              <Row style={{ paddingBottom: '12.5%' }}>
                <img alt="primary-logo" src={PrimaryLogo} />
              </Row>
              <Row>
                <p style={{ fontSize: '175%', color: 'white' }}>
                  {` Sign up for our email list! `}
                </p>
              </Row>
              <Row>
                <p style={{ fontSize: '150%', color: '#2b2f37' }}>
                  {` We'll let you know when we are ready to launch. `}
                </p>
              </Row>
              <Row>
                <EmailSignupForm />
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
          <Row>
            {this.renderScrollButton()}
          </Row>

        </div>
        <Onboarding />
      </div>
    )
  }
}

export default Landing;
