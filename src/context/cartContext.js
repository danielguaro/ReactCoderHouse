// Pasos
// 1. importar createContext

import { createContext, useContext, useMemo, useState } from 'react';

// 2. Crear variable global Ojo Recordar inicializarla en Mayuscula, que sea un array vacio
const CartContext = createContext([]);
// 3. Llevarlo donde lo requiera, en este caso, a App.js
// 4. Todo el return de App.js quedará englobado por CartContext.Provider
// 10. Para dejar de exportar el cartContext siempre, le quito el export a const CartContext (paso 2) e implemento mi variable useCartContext (OJo, la idea es respetar los nombres que se tenian)
export const useCartContext = () => {
	// mandando el useContext(), con parametro la variable que esta igualada al createContext
	return useContext(CartContext);
};

//5. Crear un componente. Se coloca como prop children, pq se van a envolver los otros componentes (los que estan en la App.js)
export const CartContextProvider = ({ children }) => {
	//8. Crear estados y funciones AQUÍ
	const [cart, setCart] = useState([]);

	//9. Agregar función para agregar al carro, que va a setiar un item
	const addToCart = (item, cant) => {
		// Si no coloco spreat de cart, el cart el item estará siempre almacenando lo que almacene
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
	//
	const isInCart = (producto) => cart.find((prod) => prod.id === producto.id);

	//
	// rec. nischols
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
	//

	// 11. implementar una función de remove
	const vaciarCart = () => {
		setCart([]);
	};

	//Implementar función de mostrar valor total a pagar
	const precioTotal = (cart) => {
		let total = 0;
		for (let carItem of cart) {
			console.log(carItem);
			total += carItem.price * carItem.cantidad;
		}
		console.log(total);
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
		// 6. Traer la constante global
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
			{/* 7. Con el nodo proveedor, se envuelven todos los children */}
			{children}
		</CartContext.Provider>
	);
};

// COn los pasos 5, 6 y 7 ya no tengo que realizar el paso 1,2,3
