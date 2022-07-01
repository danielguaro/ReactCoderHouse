import './styles.css';

import { Link } from 'react-router-dom';
import { memo } from 'react';

//Recordar, memo se utiliza para evitar el rendering constante de componentes o estados que se que NO se verán alterados

const Item = memo(({ producto }) => {
	return (
		<>
			<div className="cardFilter" /*key={producto.id}*/>
				<h3 className="text-cardFilter">{producto.title}</h3>
				<img src={producto.pictureUrl} className="img-cardFilter" />
				{/* <p>{producto.description}</p> */}
				<p className="price-cardFilter">${producto.price}</p>
				<p>stock: {producto.stock}</p>
				<p>categoria: {producto.category}</p>
				{/* Para implementar de forma dinamica el ingreso cada producto */}
				<Link to={`/detalle/${producto.id}`}>
					<button className="btn-cardFilter"> Detalle del producto</button>
				</Link>
			</div>
		</>
	);
});

export default Item;
