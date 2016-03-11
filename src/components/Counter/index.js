import React from 'react';

export default ({
	value,
	onIncrement,
	onDecrement,
    onRemove
}) => (
	<div>
		<h1>{value}</h1>
		<button onClick={onIncrement}>+</button>
		<button onClick={onDecrement}>-</button>
        <br />
        <button onClick={onRemove}>x</button>
	</div>
);