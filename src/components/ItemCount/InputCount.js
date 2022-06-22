import { Link } from 'react-router-dom';

export const InputCount = () => {
	return (
		<>
			<Link to="/cart">
				<button className="buttonCard" onClick={() => console.log('ir a cart')}>
					Ir al cart o terminar compra
				</button>
			</Link>
			<Link to="/">
				<button
					className="buttonCard"
					onClick={() => console.log('ir al home')}
				>
					Seguir comprando
				</button>
			</Link>
		</>
	);
};
