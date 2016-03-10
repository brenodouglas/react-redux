import React from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux'

const main = ({counter, dispatch}) => (
	<Counter value={counter}
  		onIncrement={() => {
  			dispatch({type: 'INCREMENT'})
  		}}
  		onDecrement={() => {
  			dispatch({type: 'DECREMENT'})
  		}}
   />
);

function mapStateToProps(counter) {
  return counter;
}

export default connect(mapStateToProps)(main)