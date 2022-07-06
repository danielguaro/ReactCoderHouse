import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';
import { getFetch } from '../../helpers/getFetch';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
	const [producto, setProducto] = useState({});
	const [loading, setLoading] = useState(true);

	// Para quitar el hardCoding que va en el fetch('2'), implementando un hook(useParams) de react router DOM, con un destructuring
	const { id } = useParams();
	console.log(id); // el id del elemento

	useEffect(() => {
		const db = getFirestore();
		//Doc recibe 3 parametros
		//	1. El db que acabamos de crear   2.Colección creada en FirestoreDatabase,   3. El Id
		const queryItem = doc(db, 'productos', id);
		//getDoc() --> Es una promesa
		getDoc(queryItem)
			.then((resp) => setProducto({ id: resp.id, ...resp.data() }))
			.catch((err) => console.log(err))
			.finally(() => {
				setLoading(false);
			});
	}, [loading]);

	// useEffect(() => {
	// 	getFetch(id)
	// 		.then((resp) => {
	// 			console.log('blabla', resp);
	// 			return setProducto(resp);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		})
	// 		.finally(() => {
	// 			setLoading(false);
	// 		});
	// }, []);
	return (
		<>
			{loading ? <h3>Cargando...</h3> : <ItemDetail producto={producto} />}{' '}
			{/* <Input /> */}
			{/* <Intercambiabilidad /> */}
			{/* <AbstracCaso1 /> */}
			{/* <AbstracCaso2 /> */}
		</>
	);
};

export default ItemDetailContainer;
