import { Link } from 'react-router-dom';
import { useState } from 'react';

//La idea es que este en otro archivo
const InputCount = () => {
	return (
		<>
			<Link to="/cart">
				<button onClick={() => console.log('ir a cart')}>
					Ir al cart o terminar compra
				</button>
			</Link>
			<Link to="/">
				<button onClick={() => console.log('ir al home')}>
					Seguir comprando
				</button>
			</Link>
		</>
	);
};

//La idea es que este en otro archivo
const ButtonCount = ({ handleIntercamb }) => {
	return (
		<>
			<button className="" onClick={handleIntercamb}>
				Agregar al carrito
			</button>
		</>
	);
};

const Intercambiabilidad = () => {
	const [inputType, setInputType] = useState('button');

	//Esta función es basicamente la encargada de todo
	const handleIntercamb = () => {
		//Pudo ser un onAdd()
		setInputType('input');
	};

	return (
		<div>
			{inputType === 'button' ? (
				<ButtonCount handleIntercamb={handleIntercamb} />
			) : (
				<InputCount />
			)}
		</div>
	);
};

export default Intercambiabilidad;
