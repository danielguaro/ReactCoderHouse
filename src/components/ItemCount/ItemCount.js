import './itemCount.css';

import { ButtonCount } from './ButtonCount';
import { InputCount } from './InputCount';
import { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd, producto }) => {
	const [count, setCount] = useState(initial);
	const [inputType, setInputType] = useState('button');

	const plus = () => {
		if (producto.stock == 0) {
			plus.disabled = true;
			agregar.disabled = true;
		} else if (producto.stock == count) {
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
		if (producto.stock === 0) {
			setInputType('NoStock');
			agregar.disabled = true;
		} else {
			onAdd(count);
			setCount(initial);
		}
		setInputType('input');
	};

	const totalPagar = producto.price * count;

	return (
		<>
			<div className="cardValues">
				<img />
				<h3>{producto.title}</h3>
				<p> $ {totalPagar}</p>
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
				{inputType === 'button' ? (
					<ButtonCount agregar={agregar} />
				) : (
					<InputCount />
				)}
			</div>
		</>
	);
};
