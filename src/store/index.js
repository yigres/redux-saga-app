import { createStore, combineReducers, applyMiddleware } from 'redux';
import { countReducer } from './countReduser'
import { userReducer } from './userReduser'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';
import { countWatcher } from '../saga/countSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  countReducer,
  userReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(countWatcher);
