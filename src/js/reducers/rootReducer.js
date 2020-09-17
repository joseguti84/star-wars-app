import {combineReducers} from 'redux';
import {planets} from './planetReducer';

export default combineReducers({
    planets: planets
});
