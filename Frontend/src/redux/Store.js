import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
	institutionReducer
  } from "./Reducers/InstitutionReducers";
  import {studentReducer  } from './Reducers/StudentReducers'
  import userReducer  from './Reducers/UserReducers'
const reducer = combineReducers({
	institutionReducer:institutionReducer,
	studentReducer:studentReducer,
	userReducer:userReducer
});
const initialState = {};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;