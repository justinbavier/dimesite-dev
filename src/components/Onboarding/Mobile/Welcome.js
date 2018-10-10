import React, { Component } from 'react';
import { Col, Icon, Row } from 'antd';

import Graphic from '../../../images/secondary-logo.svg';

class Welcome extends Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.scrollDown = this.scrollDown.bind(this);
    }
    
    scrollDown() {
        var element = document.getElementById('charities');
        element.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    render() {
        return (
            <div id="welcome" className="mobile-welcome-onboarding-wrapper">
                <Row>
                    <h1>Welcome to Dime</h1>
                </Row>
                <Row>
                    <Col
                        xs={{ span: 10, offset: 6 }}
                        sm={{ span: 0, offset: 0 }}
                        md={{ span: 0, offset: 0 }}
                        lg={{ span: 0, offset: 0 }}
                        xl={{ span: 0, offset: 0 }}
                    >
                    <img alt="onboarding-graphic-one" src={Graphic} />
                    </Col>
                </Row>
                <Row>
                    <p>
                        Giving to charities that support the causes you care about has never been easier.
                    </p>
                </Row>   
                <Row>
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
                </Row>
            </div>  
        )
    }
}

export default Welcome;