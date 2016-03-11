import counter from './counter';

export default (state = 0, action) => {
	if(action.type === 'COUNTER_INCREMENT') {
        return [...state, 0];
    }
    
    if(action.type === 'COUNTER_DECREMENT' && 'index' in action) {
        return  [
            ...state.slice(0, action.index),
            ...state.slice(action.index + 1)
        ];
    }
    
    if ('index' in action) {
        return  [
            ...state.slice(0, action.index),
            counter(state[action.index], action),
            ...state.slice(action.index + 1)
        ]; 
    }
    
    return state || [];
};