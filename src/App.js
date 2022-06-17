import './App.css';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Cart from './components/Cart/Cart';
import Error from './components/CompError/Error';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
	const mensajeProvisional = 'Texto provisional, previo al catalogo1 ';

	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route
					index
					path="/"
					element={<ItemListContainer mensaje={mensajeProvisional} />}
				/>
				<Route
					path="/categoria/:cagetoriaId"
					element={<ItemListContainer mensaje={mensajeProvisional} />}
				/>
				<Route path="/detalle/:id" element={<ItemDetailContainer />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/error" element={<Error />} />
				{/* Por si viene una ruta cualquiera, con el Navigate puedo redirigir el enrutado a un lugar puntual */}
				<Route path="*" element={<Navigate to="/error" />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
