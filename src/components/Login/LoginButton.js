import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

import { Button } from 'antd';



const LoginButton = (props, {history}) => {
  const { invalid, submitting, pristine } = props;
  return (
    <div>
      <Button
        style={{ width: '100%' }}
        type="primary"
        htmlType="submit"
        onClick={() => props.tryLogin(props.formValues, props.history)}
        disabled={invalid|| submitting || pristine}
      >
        Log In
      </Button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.loginForm.values,
  };
}

export default connect(mapStateToProps, actions)(withRouter(LoginButton));
