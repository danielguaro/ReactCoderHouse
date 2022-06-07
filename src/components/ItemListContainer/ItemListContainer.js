import { ItemCount } from '../ItemCount/ItemCount';

const ItemListContainer = ({ mensaje }) => {
	const stock = 10;
	const initial = 1; // Valor inicial
	// const onAdd = 'hi';

	return (
		<>
			<h2>{mensaje} </h2>
			<ItemCount stock={stock} initial={initial} />
		</>
	);
};

export default ItemListContainer;
