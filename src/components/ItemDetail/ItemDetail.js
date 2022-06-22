import { CartContext, useCartContext } from '../../context/cartContext';
import { Children, useContext } from 'react';

import { ItemCount } from '../ItemCount/ItemCount';

const ItemDetail = ({ producto }) => {
	// Para implementar el useContext (recordar que esto es derivado de cartContext), entre parentesis se coloca CartContext ( la variable global)
	// Después de lo anterior, ya si puedo aplicar destructuring a la función que necesito
	const { cart, addToCart, updateItem } = useCartContext();

	//Para el ItemCount
	const stock = 10;
	const initial = 1; // Valor inicial
	const onAdd = (cant) => {
		alert(`agregaste ${cant} items`);
		// Aquí llamo el objeto destructurado addToCart, lo que hago es crear un objeto nuevo que tiene el producto, pero ademas la cantidad
		// el spread operator es para que pegue todo en el mismo objeto y no cree dos
		const findProduct = cart.find((pro) => pro.id === producto.id);
		if (findProduct) {
			// setInterval(() => {
			// 	findProduct.cantidad++;
			// 	updateItem(findProduct);
			// }, 3000);
			findProduct.cantidad += cant;
			updateItem(findProduct);
		} else {
			addToCart({ ...producto, cantidad: cant });
		}
	};
	console.log('cart', cart);

	return (
		<>
			<div>
				<img src={producto.pictureUrl} />
			</div>
			<div>
				<h2>{producto.title}</h2>
				<h3>{producto.description}</h3>
				<h4>{producto.price}</h4>
			</div>
			<div>
				<ItemCount
					stock={stock}
					initial={initial}
					onAdd={onAdd}
					producto={producto}
				/>
			</div>
		</>
	);
};

export default ItemDetail;
