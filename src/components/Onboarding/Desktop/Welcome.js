import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import Fade from 'react-reveal/Fade';

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
            <div id="welcome" className="welcome-onboarding-wrapper">
                <Row type="flex" align="middle">   
                    <Col
                        xs={{ span: 24, offset: 0 }}
                        sm={{ }}
                        md={{ }}
                        lg={{ span: 7, offset: 3 }}
                        xl={{ span: 7, offset: 3 }}
                    >
                        <Fade left><div>
                            <Row>
                                <h1>Welcome to Dime</h1>
                            </Row>
                            <Row>
                                <p>
                                    Giving to charities that support the causes you care about has never been easier.
                                </p>
                            </Row>   
                        </div></Fade>  
                    </Col>    
                    <Col
                        xs={{ span: 0, offset: 0 }}
                        sm={{ }}
                        md={{ }}
                        lg={{ span: 6, offset: 5 }}
                        xl={{ span: 6, offset: 5 }}
                    >
                        <Fade right><div>
                            <img alt="onboarding-graphic-one" src={Graphic} />
                        </div></Fade>
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
                            type="primary"
                            size="large"
                            onClick={() => this.scrollDown()}
                            >
                            More?
                        </Button>
                    </Col>
                </Row>
            </div>  
        )
    }
}

export default Welcome;