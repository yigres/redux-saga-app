import { createStore, combineReducers, applyMiddleware } from 'redux';
import { countReducer } from './countReduser'
import { userReducer } from './userReduser'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  countReducer,
  userReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
