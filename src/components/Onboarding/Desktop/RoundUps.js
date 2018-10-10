import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import Roll from 'react-reveal/Roll';

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
            <div id="roundups" className="roundups-onboarding-wrapper">
                <Row type="flex" align="middle">
                    <Col
                        xs={{ }}
                        sm={{ }}
                        md={{ }}
                        lg={{ span: 7, offset: 3 }}
                        xl={{ span: 7, offset: 3 }}
                    >
                        <Roll left><div>
                            <Row>
                                <h1>How it Works</h1>
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
                        </div></Roll>
                    </Col>
                    <Col
                        xs={{ }}
                        sm={{ }}
                        md={{ }}
                        lg={{ span: 6, offset: 4 }}
                        xl={{ span: 6, offset: 4 }}                
                    >
                        <Roll right><div>
                            <img alt="onboarding-graphic-three" src={Graphic} />
                        </div></Roll>
                    </Col>
                </Row>
                <Row>             
                    <Col 
                        className="scroll-button-row"
                        xs={{ span: 4, offset: 10 }}
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
                            Ready to start?
                        </Button>
                    </Col>
                </Row>
            </div>  
        )
    }
}

export default RoundUps;