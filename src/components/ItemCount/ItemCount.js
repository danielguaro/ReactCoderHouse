import './itemCount.css';

import { ButtonCount } from './ButtonCount';
import { InputCount } from './InputCount';
import { useState } from 'react';

export const ItemCount = ({ stock, initial, onAdd, producto }) => {
	const [count, setCount] = useState(initial);
	const [inputType, setInputType] = useState('button');
	console.log('producto-------------*--', producto.stock);

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
			// alert(`Lo sentimos, actualmente no contamos con items en el stock`);
		} else {
			// alert(`agregaste ${count} items`);
			onAdd(count);
			setCount(initial);
		}
		setInputType('input');
	};

	// const onAdd = () => {
	// 	//logica
	// };
	const totalPagar = producto.price * count;
	console.log('totalPagar', totalPagar);

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
				{/* <button className="buttonCard" onClick={agregar}>
					Agregar al carro
				</button> */}
				{inputType === 'button' ? (
					<ButtonCount agregar={agregar} />
				) : (
					<InputCount />
				)}
			</div>
		</>
	);
};
