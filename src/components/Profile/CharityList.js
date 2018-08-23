import React, { Component } from 'react';

import Charity from './Charity';

class CharityList extends Component {
  renderCharities() {
    if (this.props.charities) {
      const { charities } = this.props
      return (
        charities.map((charity, index) =>
          <Charity {...this.props} charity={charity} key={index} />
        )
      )
    } else {
      return (
        <p>{` No Charities! `}</p>
      )
    }
  }

  render() {
    return (
      <div className="charity-list">
        <div className="charity-list-header">
          <p>{` Your Charities `}</p>
        </div>
        {this.renderCharities()}
      </div>
    )
  }
}

export default CharityList;
