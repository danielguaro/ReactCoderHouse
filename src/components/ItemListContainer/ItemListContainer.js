import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ mensaje }) => {
	const [productos, setProductos] = useState([]);
	const [loading, setloading] = useState(true);
	const { cagetoriaId } = useParams();

	//
	//
	//Aplicando firestore
	useEffect(() => {
		const db = getFirestore();
		// Como se trae todo, ya no se especifica el id
		const queryCollection = collection(db, 'productos');
		if (cagetoriaId) {
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
	}, [cagetoriaId]);

	return (
		<>
			<h2>{mensaje} </h2>

			{loading ? (
				<h3>Cargando...</h3>
			) : (
				<div className="filterResult">
					<ItemList productos={productos} />
				</div>
			)}
		</>
	);
};

export default ItemListContainer;
