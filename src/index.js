import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// don't forget to import 'compose' from redux when in development
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import "./main.css";

const store =
createStore(
  reducers,
  {},
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
