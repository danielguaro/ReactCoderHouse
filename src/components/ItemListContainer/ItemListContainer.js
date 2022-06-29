import { useEffect, useState } from 'react';

import ItemList from '../ItemList/ItemList';
import { getFetch } from '../../helpers/getFetch';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ mensaje }) => {
	// useState para la persistencia de data de los productos que se importarán
	const [productos, setProductos] = useState([]);
	// Implementación de un loading
	const [loading, setloading] = useState(true);

	// Ver si si me sirve
	const { cagetoriaId } = useParams();
	console.log(cagetoriaId);

	useEffect(() => {
		if (cagetoriaId) {
			getFetch()
				.then((resp) => {
					setProductos(
						resp.filter((producto) => producto.category === cagetoriaId)
					);
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setloading(false);
				});
		} else {
			getFetch()
				.then((resp) => {
					setProductos(resp);
				})
				.catch((err) => {
					console.log(err);
				})
				.finally(() => {
					setloading(false);
				});
		}
	}, [productos, cagetoriaId]);

	return (
		<>
			<h2>{mensaje} </h2>

			{loading ? (
				<h3>Cargando...</h3>
			) : (
				// productos.map((producto) => (
				// 	<Item key={producto.id} producto={producto} />
				// ))
				<div className="filterResult">
					<ItemList productos={productos} />
				</div>
			)}
			{/* <ConsumoApi /> */}
		</>
	);
};

export default ItemListContainer;
