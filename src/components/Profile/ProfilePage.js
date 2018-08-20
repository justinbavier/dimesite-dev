import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import Charity from './Charity';

class ProfilePage extends Component {
  renderContent() {
    if (this.props.auth) {
      const {amountDonated, firstName, lastName, charities } = this.props.auth

      return (
        <Row>
          <p>{` Welcome back, ${firstName} ${lastName}! `}</p>
          <p>{` Amount donated: $${amountDonated} `}</p>
        </Row>
      )
    } else {
      return (
        <p>Unauthorized</p>
      )
    }
  }
  render() {
    return (
      <div className="profile-content-wrapper">
        {this.renderContent()}
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(ProfilePage);
