import './styles.css';

import {
	addDoc,
	collection,
	documentId,
	getDocs,
	getFirestore,
	query,
	where,
	writeBatch,
} from 'firebase/firestore';

import { Link } from 'react-router-dom';
import { ShowPic } from '../../helpers/showPic';
import { useCartContext } from '../../context/cartContext';
import { useState } from 'react';

const Cart = () => {
	const { cart, vaciarCart, precioTotal, eliminarItem } = useCartContext();
	const [numeroOrden, setNumeroOrden] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [direction, setDirection] = useState('');

	const generarOrden = async (e) => {
		e.preventDefault();
		let orden = {};
		orden.buyer = {
			name: name,
			email: email,
			phone: phone,
			direction: direction,
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
		const { id } = await addDoc(orderCollection, orden);
		setNumeroOrden(id);

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
			.finally(() => {
				showResult(id);
				vaciarCart();
			});
		batch.commit();
	};

	const showResult = (orderNumber) => {
		setTimeout(() => {
			alert(orderNumber);
			console.log(numeroOrden);
			console.log(orderNumber);
		}, 1000);
	};

	return (
		<div className="backgroundCar">
			{cart.length == 0 ? (
				<>
					<h3>No cuentas con ningún producto en el carrito, vuelve luego. </h3>
					<Link to="/">
						<button className="buttonCard">Volver a inicio</button>
					</Link>
				</>
			) : (
				<>
					<ul>
						{cart.map((item) => (
							<li key={item.id}>
								<div className="card-cart">
									<img src={ShowPic(item)} className="img-cart" />
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
									<button
										className="deleteButton"
										onClick={() => eliminarItem(item)}
									>
										X
									</button>
								</div>
							</li>
						))}
					</ul>

					<div>
						<form className="formInformation">
							<h2 className="titleForm">Información de Envio</h2>
							<label className="labelForm">Nombre</label>
							<input
								className="inputForm"
								type="text"
								placeholder="Nombre"
								value={name}
								onChange={(e) => setName(e.target.value)}
							></input>
							<label className="labelForm">Correo</label>
							<input
								className="inputForm"
								type="email"
								placeholder="ejemplo@ejemplo"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							></input>
							<label className="labelForm">Dirección </label>
							<input
								className="inputForm"
								type="text"
								placeholder="Cll/Crr XX # XX-XX"
								value={direction}
								onChange={(e) => setDirection(e.target.value)}
							></input>
							<label className="labelForm">Telefono</label>
							<input
								className="inputForm"
								type="number"
								placeholder="Celular"
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							></input>
						</form>
					</div>
					<div className="totalPriceContainer">
						<h2>
							Total a pagar{' '}
							<small className="totalPrice">${precioTotal(cart)} </small>{' '}
						</h2>
					</div>
					<div className="finishContainer">
						<button className=" finish deleteAll" onClick={vaciarCart}>
							Vaciar Carrito
						</button>
						<button className="finish it" onClick={generarOrden}>
							{' '}
							Terminar Compra
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
