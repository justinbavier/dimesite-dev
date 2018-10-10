import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form } from 'antd';

import formFields from './formFields';
import EmailSignupField from './EmailSignupField';
import EmailSignupButton from './EmailSignupButton';

class EmailSignupForm extends Component {
  renderFields() {
    return (
      _.map(formFields, ({ label, name, type, icon, inputType }) => {
        return (
          <Field
            key={name}
            component={EmailSignupField}
            label={label}
            name={name}
            icon={icon}
            type={inputType}
            hasFeedback
          />
        );
      })
    )
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
      <Form>
        {this.renderFields()}
        <EmailSignupButton {...this.props} />
      </Form>
    )
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "Please enter your " + name.split(/(?=[A-Z])/).join(' ').toLowerCase() + "!";
    }
  });

  if (!String(values.email).includes(".") || !String(values.email).includes("@")) {
    errors.email = "Email is not a valid email.";
  } 

  return errors;
}

export default reduxForm({
  validate,
  form: "emailSignupForm"
})(EmailSignupForm);
