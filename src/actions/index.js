import apisauce from 'apisauce';
import { FETCH_USER, LOGIN_ERROR } from './types';

import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_GqVbXQQFj',
    userPoolWebClientId: '231rss3d5vjps16qvf5fqnflpc',
  }
});

const applicationJson = { 'Content-Type': 'application/json' }

const create = () => {
  const api = apisauce.create({
    baseURL: process.env.REACT_APP_REDIRECT,
    timeout: 10000
  })

  const hydrateUser = async (data) => {
    const resp = await api.get('/user/' + data, {
      applicationJson
    })
    return resp.data.user;
  }

  const emailSignup = async (data) => {
    const resp = await api.post('/prod/storeEmail', {
      data,
      applicationJson
    }).then(data => {
      alert("Thank you for your interest! We'll let you know when we begin beta testing!")
      window.location.reload();
      return data.data;
    })
    return resp.data;
  }

  return {
    hydrateUser,
    emailSignup
  }
}

const api = create();

export const tryLogin = (values, history) => dispatch => {
  Auth.signIn(values.email, values.password)
    .then(user => api.hydrateUser(user.username)
      .then(resp =>
        dispatch({ type: FETCH_USER, payload: resp })
      )
    )
  .catch(err => dispatch({ type: LOGIN_ERROR, payload: err.message }));
};

export const hydrateUser = (id) => async dispatch => {
  Auth.currentAuthenticatedUser()
    .then(user => api.hydrateUser(user.username)
      .then(resp => 
        dispatch({ type: FETCH_USER, payload: resp })
      )
    )
    .catch(err => {
        return err;
      }
    )
}

export const logout = () => async dispatch => {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
  dispatch({ type: FETCH_USER, payload: '' });
}

export const signupEmail = (values) => async dispatch => {
  api.emailSignup(values);
  return;
}
