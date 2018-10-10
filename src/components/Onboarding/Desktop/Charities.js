import React, { Component } from 'react';
import { Button, Col, Row } from 'antd';
import Zoom from 'react-reveal/Zoom';

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
            <div id="charities" className="charities-onboarding-wrapper">
                <Row type="flex" align="middle">
                    <Col
                        xs={{ }}
                        sm={{ }}
                        md={{ }}
                        lg={{ span: 6, offset: 3 }}
                        xl={{ span: 6, offset: 3 }}
                    >
                        <Zoom><div>
                            <img alt="onboarding-graphic-two" src={Graphic} />
                        </div></Zoom>
                    </Col>
                    <Col
                        xs={{ }}
                        sm={{ }}
                        md={{ }}
                        lg={{ span: 7, offset: 4 }}
                        xl={{ span: 7, offset: 4 }}

                    >
                        <Zoom><div>
                            <Row>
                                <h1>Charities you can trust.</h1>
                            </Row>
                            <Row>
                                <p>
                                    We work one on one with every charity on Dime to make sure your donations 
                                    go to organizations that are committed to making a real difference
                                </p>
                            </Row>
                        </div></Zoom>
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
                            More?
                        </Button>
                    </Col>
                </Row>
            </div>  
        )
    }
}

export default Charities;