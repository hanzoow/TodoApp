import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './../redux/reducers';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const enhancers = [applyMiddleware(...middlewares)];

export const store = createStore(rootReducer, compose(...enhancers));
