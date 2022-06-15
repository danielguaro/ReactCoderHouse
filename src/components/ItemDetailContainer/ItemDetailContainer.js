import { useEffect, useState } from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';
import { getFetch } from '../getFetch/getFetch';

const ItemDetailContainer = () => {
	const [producto, setProducto] = useState({});
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		getFetch('2')
			.then((resp) => {
				console.log('blabla', resp);
				return setProducto(resp);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return (
		<>{loading ? <h3>Cargando...</h3> : <ItemDetail producto={producto} />}</>
	);
};

export default ItemDetailContainer;
