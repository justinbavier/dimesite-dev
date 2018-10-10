import React, { Component } from 'react';
import { Col, Row } from 'antd';

import Graphic from '../../../images/secondary-logo.svg';

class RoundUps extends Component {
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.scrollDown = this.scrollDown.bind(this);
    }
    
    scrollDown() {
        var element = document.getElementById('navigation');
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    render() {
        return (
            <div id="roundups" className="mobile-roundups-onboarding-wrapper">\
                <Row>
                    <h1>How it Works</h1>
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
                        After you link a payment method, every time you make a purchase, 
                        we'll round it up and put the spare change towards your next donation. 
                    </p>
                    <br />
                    <p>
                        Once you hit $10, we'll make a donation to your selected charity!
                    </p>
                </Row>
                <Row>             
                    <p>Get started today!</p>
                </Row>
            </div>  
        )
    }
}

export default RoundUps;