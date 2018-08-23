import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col,Progress } from 'antd';

import CharityList from './CharityList';
import TransactionList from './TransactionList';

class ProfilePage extends Component {
  componentDidMount() {
    this.props.hydrateUser(localStorage.id);
  }

  renderContent() {
    if (this.props.auth) {
      const {amountDonated, firstName, lastName, id } = this.props.auth
      const hardProgress = 7.34;
      const profileUrl = 'https://s3.us-east-2.amazonaws.com/dime-charity/' + id + '.jpg';
      const cents = hardProgress.toFixed(2);
      return (
        <div>
          <div className="profile-page-header">
            <Row>
              <div className="profile-picture">
                <img alt="profile" src={profileUrl} />
              </div>
            </Row>
            <Row>
              <p>{` Welcome back, ${firstName} ${lastName}! `}</p>
              <p>{` So far, you've donated $${amountDonated} `}</p>
            </Row>
            <Row>
              <Col
                xs={{ span: 20, offset: 2 }}
                sm={{ span: 10, offset: 7 }}
                md={{ span: 10, offset: 7 }}
                lg={{ span: 10, offset: 7 }}
                xl={{ span: 10, offset: 7 }}
              >
                <Progress status="active" strokeColor="#2B2F37" percent={cents * 10} format={(percent => `$${cents}`)}/>
              </Col>
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
