import logReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
   log: logReducer
});

export default allReducers;