import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
	return (
		<>
			<div /*key={producto.id}*/>
				<h3>{producto.title}</h3>
				<img src={producto.pictureUrl}></img>
				<p>{producto.description}</p>
				<p>{producto.price}</p>
				<p>stock: {producto.stock}</p>
				<p>categoria: {producto.category}</p>
				{/* Para implementar de forma dinamica el ingreso cada producto */}
				<Link to={`/detalle/${producto.id}`}>
					<button> Detalle del producto</button>
				</Link>
			</div>
		</>
	);
};

export default Item;
