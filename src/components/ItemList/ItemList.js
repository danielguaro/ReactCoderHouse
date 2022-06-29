import Item from '../Item/Item';
import { memo } from 'react';

// 1. react memo (componente) --> componente = función
// 2. memo(componente. fn) -->fn = función evaluadora
// Con memo evito TENER que volver a renderizar componentes que se que no cambiarán

const ItemList = memo(({ productos }) => {
	return productos.map((producto) => (
		<Item key={producto.id} producto={producto} />
	));
});

export default ItemList;
