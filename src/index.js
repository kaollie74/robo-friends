import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import 'tachyons';
import './index.css';

// import reducer
import searchRobots from './Redux/Reducers/reducer';




const logger = createLogger();

const storeInstance = createStore(
  combineReducers({
    searchRobots,
  }),
  applyMiddleware(logger)
);


ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
