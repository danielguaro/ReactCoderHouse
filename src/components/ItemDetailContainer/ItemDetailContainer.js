import { useEffect, useState } from 'react';

import AbstracCaso1 from '../clase9/AbstracCaso1';
import AbstracCaso2 from '../clase9/AbstracCaso2';
import Input from '../clase9/Input';
import Intercambiabilidad from '../clase9/Intercambiabilidad';
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
		getFetch(id)
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
