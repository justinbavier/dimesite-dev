import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';

import authReducer from './authReducer';
import errReducer from './errReducer';

export default combineReducers({
  form: reduxForm,
  auth: authReducer,
  err: errReducer,
});
