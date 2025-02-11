import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/Components/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
//import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import 'tachyons';
import './index.css';

// import reducer
import rootReducer from './Redux/Reducers/index';
import rootSaga from './Redux/Sagas/index';



const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const storeInstance = createStore(
    rootReducer,
 
  applyMiddleware( sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);


ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
