import { useEffect, useState } from 'react';

import { getFetch } from '../../helpers/getFetch'; // Se importa con un destructuring

// copio y pego lo siguiente en getFetch.js
// const productos = [
// 	{ id: '1', name: 'flor1', description: 'lorem ipsu...', stock: 5 },
// 	{ id: '2', name: 'flor2', description: 'lorem ipsu...', stock: 8 },
// 	{ id: '3', name: 'flor3', description: 'lorem ipsu...', stock: 4 },
// 	{ id: '4', name: 'flor4', description: 'lorem ipsu...', stock: 2 },
// ];

// const getFetch = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(productos);
// 		}, 3000);
// 	});
// };

const Provisional = () => {
	//Para la implementación de persistencia de data useState()
	const [productos, setProductos] = useState([]);

	// Para implementar un loading
	const [loading, setloading] = useState(true);

	//Implementación de useEffect() para evitar que mi getFetch() sea llamado antes del renderizado
	// Toda tarea API o llamada asincronica, se estará metiendo dentro de un useEffect(), para que NO bloquee el render
	useEffect(() => {
		getFetch() // Esto sería una llamada a la API
			.then((resp) => {
				// Tener en cuenta que lo que tengo en el interior NO tiene persistencia de data, las variables aqui plasmadas desaparecerán, por tal motivo debo utilizar un useState() para tener PERSISTENCIA DE DATA
				//Para no volver a renderizar mi componente, cada vez que tengo una acción, implemento como segundo parametro de mi useEffect() un array vacio
				setProductos(resp);
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				// Para cambiar el estado del loading, sin embargo, si quiero, lo puedo implementar en el propio .then()
				setloading(false);
			});
	}, []);
	console.log(productos);
	return (
		<div>
			{loading ? (
				<h2>Cargando...</h2>
			) : (
				/*Normalmente en funciones callback, implemento la siguiente logica ()=>{}, sin embargo, dado que en JSX la implementación de {} es "escapar" a un JS, NO puedo implementar {} en el callback/función flecha, por lo que lo cambio por parentesis (), como el siguiente ejemplo */
				productos.map((producto) => (
					<div key={producto.id}>
						<h3>{producto.name}</h3>
						<p>{producto.description}</p>
						<p>stock: {producto.stock}</p>
					</div>
				))
			)}
		</div>
	);
};

export default Provisional;
