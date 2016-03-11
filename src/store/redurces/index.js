import {combineReducers} from 'redux';
import counterCollection from './counterCollection';

export default combineReducers({
    counters: counterCollection
});