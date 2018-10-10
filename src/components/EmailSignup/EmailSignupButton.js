import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

import { Button } from 'antd';


const EmailSignupButton = (props) => {
  const { invalid, submitting, pristine } = props;

  return (
    <div>
        <Button
          style={{ width: '100%' }}
          htmlType="submit"
          onClick={() => props.signupEmail(props.formValues)}
          disabled={invalid|| submitting || pristine}
        >
            Sign Up
        </Button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    formValues: state.form.emailSignupForm.values,
  };
}

export default connect(mapStateToProps, actions)(withRouter(EmailSignupButton));
