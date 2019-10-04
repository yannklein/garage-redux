import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

import '../assets/stylesheets/application.scss';

import carsReducer from './reducers/cars_reducer';
import App from './components/app';

const initialState = {
  garageName: "yann-squat",
  cars: []
};

const identityReducer = (state = null) => state;

const reducers = combineReducers({
  cars: carsReducer,
  garageName: identityReducer,
  form: formReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
