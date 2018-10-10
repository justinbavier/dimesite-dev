import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col,Progress } from 'antd';

import CharityList from './CharityList';
import TransactionList from './TransactionList';

class ProfilePage extends Component {
  renderContent() {
    if (this.props.auth) {
      const {totalDonated, firstName, lastName, progress } = this.props.auth
      const totalDonatedCents = totalDonated / 100;
      const progressCents = progress / 100;
      return (
        <div>
          <div className="profile-page-header">
            <Row>
              <p>{` Welcome back, ${firstName} ${lastName}! `}</p>
              <p>{` So far, you've donated $${totalDonatedCents.toFixed(2)} `}</p>
            </Row>
            <Row className="profile-progress-bar">
              <Col
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 10, offset: 7 }}
                md={{ span: 10, offset: 7 }}
                lg={{ span: 10, offset: 7 }}
                xl={{ span: 10, offset: 7 }}
              >
                <Progress
                  showInfo={false} 
                  status="active" 
                  strokeColor="#2B2F37" 
                  percent={progressCents * 10} 
                  format={(percent => `$${progressCents}`)}
                />
              </Col>
            </Row>
            <Row>
              <p>{` $${progressCents.toFixed(2)} until your next donation is made.`}</p>
            </Row>
          </div>

          <div className="profile-page-body">
            <Row>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
              >
                <CharityList {...this.props.auth} />
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
              >
                <TransactionList {...this.props.auth} />
              </Col>
            </Row>
          </div>
        </div>
      )
    } else {
      return (
        <p>Unauthorized</p>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(ProfilePage);
