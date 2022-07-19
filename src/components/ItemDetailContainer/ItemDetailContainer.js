import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
	const [producto, setProducto] = useState({});
	const [loading, setLoading] = useState(true);

	const { id } = useParams();

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

	return (
		<>{loading ? <h3>Cargando...</h3> : <ItemDetail producto={producto} />} </>
	);
};

export default ItemDetailContainer;
