import React, {Component} from 'react';
import Counter from 'components/Counter';
import { connect } from 'react-redux'

const main = ({components, counter, dispatch}) => (
    <section>
        <button onClick={() => {
            dispatch({type: 'COUNTER_INCREMENT'})
        }}>Add Counter</button>

        {components.map((counter, key) => {
           return (<Counter key={key} value={counter}
                onIncrement={() => {
                    dispatch({type: 'INCREMENT', index: key})
                }}
                onDecrement={() => {
                    dispatch({type: 'DECREMENT', index: key})
                }}
                onRemove={() => {
                    console.dir("Edygar");
                    dispatch({type: 'COUNTER_DECREMENT', index: key})
                }}
            />)
        })}
   </section>
);

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(main)