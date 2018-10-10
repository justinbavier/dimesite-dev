import React, { Component } from 'react';
import { Col, Icon, Row } from 'antd';

import Graphic from '../../../images/secondary-logo.svg';

class Charities extends Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.scrollDown = this.scrollDown.bind(this);
    }
    
    scrollDown() {
        var element = document.getElementById('roundups');
        element.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    render() {
        return (
            <div id="charities" className="mobile-charities-onboarding-wrapper">
                <Row>
                    <h1>Charities you can trust.</h1>
                </Row>
                <Row>
                    <Col
                        xs={{ span: 10, offset: 6 }}
                        sm={{ span: 0, offset: 0 }}
                        md={{ span: 0, offset: 0 }}
                        lg={{ span: 0, offset: 0 }}
                        xl={{ span: 0, offset: 0 }}
                    >
                        <img alt="onboarding-graphic-two" src={Graphic} />      
                    </Col>
                </Row>     
                <Row>
                    <p>
                        We work one on one with every charity on Dime to make sure your donations 
                        go to organizations that are committed to making a real difference
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
                        <p style={{ textAlign: 'center', fontSize: '200%', color: '#2B2F37' }}>
                            <Icon type="down" />
                        </p>
                    </Col>
                </Row>
            </div>  
        )
    }
}

export default Charities;