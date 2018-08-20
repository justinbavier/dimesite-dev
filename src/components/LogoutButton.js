import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const LogoutButton = (props) => {
  return (
    <div>
      <a
        href="/"
        onClick={() => props.logout()}
      >
        Logout
      </a>
    </div>
  )
}

export default connect(null, actions)(LogoutButton);
