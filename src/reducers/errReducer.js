import { LOGIN_ERROR } from '../actions/types';

export default function(state = null, action) {
  switch(action.type) {
    case LOGIN_ERROR:
      const loginErrState = {...state};
      if (action.payload) {
        loginErrState.error = action.payload
      }
      return loginErrState;
    default:
      return state;
  }

}
