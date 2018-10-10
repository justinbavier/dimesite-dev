import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Charity extends Component {
  render() {
    const { name, picture } = this.props.charity;
    return (
      <Row>
      <Col
        xs={{ span: 8 }}
        sm={{ span: 8 }}
        md={{ span: 8 }}
        lg={{ span: 8 }}
        xl={{ span: 8 }}
      >
        <img className="charity-picture" alt={`${name}-profile`} src={picture} style={{ width: '50%' }} />
      </Col>
      <Col
        xs={{ span: 16 }}
        sm={{ span: 16 }}
        md={{ span: 16 }}
        lg={{ span: 16 }}
        xl={{ span: 16 }}
      >
        <Row>
          <p>
            {` ${name} `}
          </p>
        </Row>
      </Col>
      </Row>
    )
  }
}

export default Charity;
