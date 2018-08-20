import React, { Component } from 'react';

class Charity extends Component {
  render() {
    const { name } = this.props.charity;
    console.log(this.props)
    return (
      <p>
        {` ${name} `}
      </p>
    )
  }
}

export default Charity;
