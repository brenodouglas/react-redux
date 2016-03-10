import {combineReducers} from 'redux';
import counter from './counter';
import counterComponents from './counterComponents';

export default combineReducers({
	counter,
	counterComponents
});