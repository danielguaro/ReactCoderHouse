const Item = ({ producto }) => {
	return (
		<>
			<div /*key={producto.id}*/>
				<h3>{producto.title}</h3>
				<img src={producto.pictureUrl}></img>
				<p>{producto.description}</p>
				<p>{producto.price}</p>
				<p>stock: {producto.stock}</p>
			</div>
		</>
	);
};

export default Item;
