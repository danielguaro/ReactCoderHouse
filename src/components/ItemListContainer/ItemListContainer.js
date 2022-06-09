import { ItemList, getFetch } from '../ItemList/ItemList';
import { useEffect, useState } from 'react';

import { ItemCount } from '../ItemCount/ItemCount';
import Provisional from './Provisional';

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
	}, []);

	const stock = 10;
	const initial = 1; // Valor inicial
	// const onAdd = 'hi';

	return (
		<>
			<h2>{mensaje} </h2>
			<ItemCount stock={stock} initial={initial} />
			{/* <Provisional /> */}
			{loading ? <h3>Cargando...</h3> : <ItemList />}
		</>
	);
};

export default ItemListContainer;
