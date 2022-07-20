// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// REDUX
import { createStore, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// SAGAS/REDUCER
import rootSaga from './redux/sagas/_root.saga';
import rootReducer from './redux/reducers/_root.reducer';

// IMPORT APP
import App from './components/App/App';

// CSS
import './index.css';

// PERFORMANCE
import reportWebVitals from './reportWebVitals';

// MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

// STORE INSTANCE
const store = createStore(
  // () => {}, --- use if no reducers needed
  rootReducer,
  applyMiddleware(...middlewareList),
);

sagaMiddleware.run(rootSaga);

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();


