import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore';
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

	//
	//
	//Aplicando firestore
	useEffect(() => {
		if (cagetoriaId) {
			const db = getFirestore();
			// Como se trae todo, ya no se especifica el id
			const queryCollection = collection(db, 'productos');
			const queryCollectionFilter = query(
				queryCollection,
				where('category', '==', cagetoriaId)
			);
			getDocs(queryCollectionFilter)
				.then((resp) =>
					setProductos(
						resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
					)
				)
				.catch((err) => console.log(err))
				.finally(() => {
					setloading(false);
				});
		} else {
			const db = getFirestore();
			// Como se trae todo, ya no se especifica el id
			const queryCollection = collection(db, 'productos');
			getDocs(queryCollection)
				.then((resp) =>
					setProductos(
						resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
					)
				)
				.catch((err) => console.log(err))
				.finally(() => {
					setloading(false);
				});
		}
	}, [productos, cagetoriaId]);
	// console.log(productos);
	//

	// useEffect(() => {
	// 	if (cagetoriaId) {
	// 		getFetch()
	// 			.then((resp) => {
	// 				setProductos(
	// 					resp.filter((producto) => producto.category === cagetoriaId)
	// 				);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			})
	// 			.finally(() => {
	// 				setloading(false);
	// 			});
	// 	} else {
	// 		getFetch()
	// 			.then((resp) => {
	// 				setProductos(resp);
	// 			})
	// 			.catch((err) => {
	// 				console.log(err);
	// 			})
	// 			.finally(() => {
	// 				setloading(false);
	// 			});
	// 	}
	// }, [productos, cagetoriaId]);

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
