import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { FETCH_PROPERTIES, ADD_PROPERTIES, ADD_VALUE } from './actions/types';

const initialState = {};

const middleWare = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleWare)
);

export default store;