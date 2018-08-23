import React, { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}


class EmailSignup extends Component {
  componentDidMount() {
   this.props.form.validateFields();
 }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const emailError = isFieldTouched('email') && getFieldError('email');

    return (
      <Form>
        <Row>
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 10, offset: 4 }}
            md={{ span: 10, offset: 4 }}
            lg={{ span: 18, offset: 0 }}
            xl={{ span: 18 }}
          >
            <FormItem
              validateStatus={emailError ? 'error' : ''}
              help={emailError || ''}
              >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: 'Email address is not valid.',
                }, {
                  required: true, message: 'Please enter an email address.',
                }],
              })(
                <Input placeholder="Email address" />
              )}
            </FormItem>
          </Col>
          <Col
            xs={{ span: 20, offset: 2 }}
            sm={{ span: 6, offset: 0 }}
            md={{ span: 6, offset: 0 }}
            lg={{ span: 6, offset: 0 }}
            xl={{ span: 6 }}
          >
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                disabled={hasErrors(getFieldsError())}
              >
                Sign Up
              </Button>
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }
}

const WrappedEmailSignup = Form.create()(EmailSignup);

export default WrappedEmailSignup;
