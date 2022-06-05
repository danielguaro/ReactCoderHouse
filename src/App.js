import './App.css';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
	const mensajeProvisional = 'Texto provisional, previo al catalogo1 ';

	return (
		<>
			<NavBar />
			<ItemListContainer mensaje={mensajeProvisional} />
		</>
	);
}

export default App;
