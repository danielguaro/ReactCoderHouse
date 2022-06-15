import { useEffect, useState } from 'react';

import ConsumoApi from './ConsumoApi';
import Item from '../Item/Item';
import { ItemCount } from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import { getFetch } from '../getFetch/getFetch';

const ItemListContainer = ({ mensaje }) => {
	// useState para la persistencia de data de los productos que se importarán
	const [productos, setProductos] = useState([]);
	// Implementación de un loading
	const [loading, setloading] = useState(true);

	useEffect(() => {
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
	}, [productos]);

	const stock = 10;
	const initial = 1; // Valor inicial
	const onAdd = (cant) => {
		alert(`agregaste ${cant} items`);
	};

	return (
		<>
			<h2>{mensaje} </h2>
			<ItemCount stock={stock} initial={initial} onAdd={onAdd} />
			{loading ? (
				<h3>Cargando...</h3>
			) : (
				// productos.map((producto) => (
				// 	<Item key={producto.id} producto={producto} />
				// ))
				<ItemList productos={productos} />
			)}
			{/* <ConsumoApi /> */}
		</>
	);
};

export default ItemListContainer;
