import './itemCount.css';

import { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd }) => {
	const [count, setCount] = useState(initial);

	const plus = () => {
		if (stock == 0) {
			plus.disabled = true;
		} else if (stock == count) {
			plus.disabled = true;
			alert('Lo siento no tenemos mas stock');
		} else {
			setCount(count + 1);
		}
	};
	const minus = () => {
		if (initial == count) {
			minus.disabled = true;
		} else if (count > 1) {
			setCount(count - 1);
		}
	};
	const agregar = () => {
		if (stock == 0 || initial == 0) {
			agregar.disabled = true;
			// alert(`Lo sentimos, actualmente no contamos con items en el stock`);
		} else {
			// alert(`agregaste ${count} items`);
			onAdd(count);
			setCount(initial);
		}
	};

	// const onAdd = () => {
	// 	//logica
	// };

	return (
		<>
			<div className="cardValues">
				<img />
				<h3>Flor 1</h3>
				<p> $70000</p>
				<div className="cardMinusPlus">
					<p className="buttons" onClick={minus}>
						{' '}
						-{' '}
					</p>
					<p className="amount">{count}</p>
					<p className="buttons" onClick={plus}>
						{' '}
						+{' '}
					</p>
				</div>
				<button className="buttonCard" onClick={agregar}>
					Agregar al carro
				</button>
			</div>
		</>
	);
};
