const ItemDetail = ({ producto }) => {
	return (
		<>
			<div>
				<img src={producto.pictureUrl} />
			</div>
			<div>
				<h2>{producto.title}</h2>
				<h3>{producto.description}</h3>
				<h4>{producto.price}</h4>
			</div>
		</>
	);
};

export default ItemDetail;
