import { createContext, useContext, useMemo, useState } from 'react';

const CartContext = createContext([]);

export const useCartContext = () => {
	return useContext(CartContext);
};

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const addToCart = (item, cant) => {
		const findProduct = isInCart(item);
		if (findProduct) {
			findProduct.cantidad += cant;
			console.log(findProduct, 'findProduct');
			updateItem(findProduct);
			return true;
		} else {
			setCart([...cart, { ...item, cantidad: cant }]);
			return false;
		}
	};

	const isInCart = (producto) => cart.find((prod) => prod.id === producto.id);

	const updateItem = (item) => {
		const newCart = cart.map((i) => {
			if (i.id === item.id) {
				return {
					...i,
					...item,
				};
			}
			return i;
		});
		setCart(newCart);
	};

	// 11. implementar una función de remove
	const vaciarCart = () => {
		setCart([]);
	};

	//Implementar función de mostrar valor total a pagar
	const precioTotal = (cart) => {
		let total = 0;
		for (let carItem of cart) {
			total += carItem.price * carItem.cantidad;
		}
		return total;
	};

	//Función para eliminar item
	const eliminarItem = (item) => {
		const newCart = cart.filter(({ id }) => {
			return item.id !== id;
		});
		setCart(newCart);
	};

	//Función para sumar cantidades para el cart
	// const sumarCantidades = (cart) => {
	// 	let total = 0;
	// 	for (let cartcant of cart) {
	// 		total += cartcant.cantidad;
	// 	}
	// 	return total;
	// };
	//Otra forma
	const totalCantidades = useMemo(() => {
		return cart.reduce((total, item) => {
			total += item.cantidad;
			return total;
		}, 0);
	}, [cart]);

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				vaciarCart,
				updateItem,
				isInCart,
				precioTotal,
				eliminarItem,
				totalCantidades,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
