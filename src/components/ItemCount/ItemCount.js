import './itemCount.css';

import { useState } from 'react';

export const ItemCount = ({ stock, initial }) => {
	const [count, setCount] = useState(1);

	const plus = (inventario) => {
		if (inventario == 0) {
			plus.disabled = true;
		} else if (inventario == count) {
			plus.disabled = true;
			alert('Lo siento no tenemos mas stock');
		} else {
			setCount(count + 1);
		}
	};
	const minus = () => {
		if (count > 1) {
			setCount(count - 1);
		}
	};

	const agregar = (inventario, CantidadItem) => {
		if (inventario == 0 || CantidadItem == 0) {
			agregar.disabled = true;
			// alert(`Lo sentimos, actualmente no contamos con items en el stock`);
		} else {
			CantidadItem = count;
			alert(`agregaste ${CantidadItem} items`);
			setCount(1);
		}
	};

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
					<p className="buttons" onClick={() => plus(stock)}>
						{' '}
						+{' '}
					</p>
				</div>
				<button
					className="buttonCard"
					onClick={() => {
						agregar(stock, initial);
					}}
				>
					Agregar al carro
				</button>
			</div>
		</>
	);
};
