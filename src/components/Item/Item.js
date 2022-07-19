import './styles.css';

import { Link } from 'react-router-dom';
import { ShowPic } from '../../helpers/showPic';
import { memo } from 'react';

//Recordar, memo se utiliza para evitar el rendering constante de componentes o estados que se que NO se verán alterados

const Item = memo(({ producto }) => {
	return (
		<>
			<div className="cardFilter">
				<h3 className="text-cardFilter">{producto.title}</h3>
				<img src={ShowPic(producto)} className="img-cardFilter" />
				<p className="price-cardFilter">${producto.price}</p>
				<p>stock: {producto.stock}</p>
				<p>categoria: {producto.category}</p>
				{producto.stock == 0 ? (
					<button className="btn-cardFilter">Sin stock</button>
				) : (
					<Link to={`/detalle/${producto.id}`}>
						<button className="btn-cardFilter"> Detalle del producto</button>
					</Link>
				)}
			</div>
		</>
	);
});

export default Item;
