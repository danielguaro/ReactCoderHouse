import './styles.css';

import {
	addDoc,
	collection,
	doc,
	documentId,
	getDocs,
	getFirestore,
	query,
	updateDoc,
	where,
	writeBatch,
} from 'firebase/firestore';

import { useCartContext } from '../../context/cartContext';
import { useState } from 'react';

const Cart = () => {
	// 1. Trayendo el useContext
	const { cart, vaciarCart, precioTotal, eliminarItem } = useCartContext();
	const [numeroOrden, setNumeroOrden] = useState('');

	// Para agregar items a un usuario
	const generarOrden = async (e) => {
		e.preventDefault();
		let orden = {};
		orden.buyer = {
			name: 'Daniel',
			email: 'ejemplo@gmail.com',
			phone: '317641',
		};
		orden.total = precioTotal(cart);
		orden.prods = cart.map((prod) => {
			const id = prod.id;
			const name = prod.title;
			const price = prod.price * prod.cantidad;
			return { id, name, price };
		});
		console.log(orden);
		//Vinculación con Firestore (para tener la compra en la base de datos no relacional)
		//Insertar
		const db = getFirestore();
		//collection recibe 2 valores, el segundo será una nueva colección que crearemos
		const orderCollection = collection(db, 'orders');
		//Se implementará la función addDoc, recibe 2 parametros, la colección que se acabó de crear y la orden(objeto que vamos a insertar)
		addDoc(orderCollection, orden).then((resp) => setNumeroOrden(resp.id));

		// //uodate
		// //Con doc se hace referencia a un documento en particular, recibe 3 parametros (db, colección, id)
		// const updateCollection = doc(db, 'productos', 'qIKns1bSQ4vUTAsdrwxy');
		// //para actualizar el doc, el segundo parametro hace referencia al objeto del id y estará actualizando los campos que yo incluya en este
		// updateDoc(updateCollection, {
		// 	stock: 30,
		// });

		//Actualizar el stock
		const queryCollectionStock = collection(db, 'productos');
		const queryActualizarStock = await query(
			queryCollectionStock,
			where(
				documentId(),
				'in',
				cart.map((prod) => prod.id)
			)
		);
		const batch = writeBatch(db);
		await getDocs(queryActualizarStock)
			.then((resp) =>
				resp.docs.forEach((res) =>
					batch.update(res.ref, {
						stock:
							res.data().stock - cart.find((pro) => pro.id === res.id).cantidad,
					})
				)
			)
			.finally(() => vaciarCart());
		batch.commit();
	};

	console.log(numeroOrden);

	return (
		<div>
			<ul>
				{cart.map((item) => (
					<li key={item.id}>
						<div className="card-cart">
							<img src={item.pictureUrl} className="img-cart" />
							<div className="inform-cart">
								<div className="littleInfo-cart">
									<p className="detail-p-cart">producto: </p>
									<h3 className="detail-cart"> {item.title}</h3>
								</div>
								<div className="littleInfo-cart">
									<p className="detail-p-cart"> Precio: </p>
									<h3 className="detail-cart"> ${item.price}</h3>
								</div>
								<div className="littleInfo-cart">
									<p className="detail-p-cart"> Cantidad: </p>
									<h3 className="detail-cart"> {item.cantidad}</h3>
								</div>
							</div>
							<button onClick={() => eliminarItem(item)}>X</button>
						</div>
					</li>
				))}
			</ul>
			<div>
				<h2>{precioTotal(cart)}</h2>
			</div>
			<div>
				<button onClick={vaciarCart}>Vaciar Carrito</button>
				<button onClick={generarOrden}> Terminar Compra</button>
				{numeroOrden ? alert(`Nº de orden:  ${numeroOrden}`) : ''}
			</div>
		</div>
	);
};

export default Cart;
