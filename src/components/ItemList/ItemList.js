import Item from '../Item/Item';
import { memo } from 'react';

const ItemList = memo(({ productos }) => {
	return productos.map((producto) => (
		<Item key={producto.id} producto={producto} />
	));
});

export default ItemList;
