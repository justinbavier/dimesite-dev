import _ from "lodash";
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form } from 'antd';

import LoginField from './LoginField';
import LoginButton from './LoginButton';
import formFields from './formFields';


class LoginForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type, icon, inputType }) => {
      return (
        <Field
          key={name}
          component={LoginField}
          label={label}
          name={name}
          icon={icon}
          type={inputType}
          hasFeedback
        />
      );
    });
  }

  renderErrors() {
    switch (this.props.err) {
      case null:
        return;
      default:
        return (
          <p>
            {` ${this.props.err.error} `}
          </p>
        )
    }
  }
  render() {
    return (
      <div>
        <Form>
          {this.renderFields()}
          {this.renderErrors()}
          <LoginButton {...this.props} />
        </Form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "Please input your " + name + "!";
    }
  });
  return errors;
}

export default reduxForm({
  validate,
  form: "loginForm"
})(LoginForm);
