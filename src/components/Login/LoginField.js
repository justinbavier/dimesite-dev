import React from 'react';
import { Input, Icon, Form } from 'antd';

const FormItem = Form.Item;

const makeField = Component => ({ input, meta, icon, children, hasFeedback, label, ...rest, err }) => {
  const hasError = meta.touched && meta.invalid;
  return (
    <FormItem
      validateStatus={hasError ? "error" : "success"}
      hasFeedback={hasFeedback && hasError}
      help={hasError && meta.error}
    >
      <Component
        {...input}
        {...rest}
        prefix={<Icon type={icon} />}
        placeholder={label}
        children={children}
      />
    </FormItem>
  );
};

const LoginField = makeField(Input);

export default LoginField;
