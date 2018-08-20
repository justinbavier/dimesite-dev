import apisauce from 'apisauce';
import { FETCH_USER, LOGIN_ERROR } from './types';

const applicationJson = { 'Content-Type': 'application/json' }

const create = () => {
  const api = apisauce.create({
    baseURL: process.env.REACT_APP_REDIRECT,
    timeout: 10000
  })

  const tryLogin = async (data) => {
    const resp = await api.post('/users/login', {
      email: data.email,
      password: data.password
     }, {
      applicationJson
    })
    return resp;
  }

  const hydrateUser = async (data) => {
    const resp = await api.post('/users/hydrate', {
      id: data
    }, {
      applicationJson
    })
    return resp;
  }

  return {
    tryLogin,
    hydrateUser
  }
}

const api = create();

export const tryLogin = (values, history) => async dispatch => {
  const resp = await api.tryLogin(values);
  if (resp.status !== 200) {
    dispatch({ type: LOGIN_ERROR, payload: resp.data});
    return resp.data;
  } else {
    dispatch({ type: FETCH_USER, payload: resp.data });
    localStorage.setItem("id", resp.data.user.id);
    history.push('/profile');
    return resp;
  }
};

export const hydrateUser = (id) => async dispatch => {
  if (!id) {
    return;
  } else {
    const resp = await api.hydrateUser(id);
    dispatch({ type: FETCH_USER, payload: resp.data });
  }
}

export const logout = () => async dispatch => {
  localStorage.setItem("id", "");
  dispatch({ type: FETCH_USER, payload: '' });
}
